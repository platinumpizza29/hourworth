/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server';
import { db } from "~/server/db"; // Using your existing Prisma instance
import { startOfWeek, endOfWeek } from "date-fns";

interface CreateHourInput {
  userId: string;
  hoursWorked: number;
  category: string;
  description?: string;
  date: Date;
}

export async function createHourEntry(input: CreateHourInput) {
  try {
    return await db.$transaction(async (tx) => {
      // 1. Create the hour entry
      const hourEntry = await tx.hour.create({
        data: {
          userId: input.userId,
          date: input.date,
          hoursWorked: input.hoursWorked,
          category: input.category,
          description: input.description,
        },
      });

      // 2. Update or create weekly summary
      const weekStart = startOfWeek(input.date);
      const weekEnd = endOfWeek(input.date);

      const weeklyHours = await tx.hour.aggregate({
        where: {
          userId: input.userId,
          date: {
            gte: weekStart,
            lte: weekEnd,
          },
        },
        _sum: {
          hoursWorked: true,
        },
      });

      await tx.weeklySummary.upsert({
        where: {
          userId_startDate: {
            userId: input.userId,
            startDate: weekStart,
          },
        },
        create: {
          userId: input.userId,
          startDate: weekStart,
          endDate: weekEnd,
          totalHours: weeklyHours._sum?.hoursWorked ?? 0,
        },
        update: {
          totalHours: weeklyHours._sum?.hoursWorked ?? 0,
        },
      });

      // 3. Update or create monthly summary
      const month = input.date.getMonth() + 1;
      const year = input.date.getFullYear();

      const monthlyHours = await tx.hour.aggregate({
        where: {
          userId: input.userId,
          date: {
            gte: new Date(year, month - 1, 1),
            lt: new Date(year, month, 1),
          },
        },
        _sum: {
          hoursWorked: true,
        },
      });

      await tx.monthlySummary.upsert({
        where: {
          userId_month_year: {
            userId: input.userId,
            month,
            year,
          },
        },
        create: {
          userId: input.userId,
          month,
          year,
          totalHours: monthlyHours._sum?.hoursWorked ?? 0,
        },
        update: {
          totalHours: monthlyHours._sum?.hoursWorked ?? 0,
        },
      });

      // 4. Log the activity
      await tx.activityLog.create({
        data: {
          userId: input.userId,
          action: `Added ${input.hoursWorked} hours for ${input.category}`,
        },
      });

      return hourEntry;
    });
  } catch (error) {
    console.error("Error creating hour entry:", error);
    throw error;
  }
}
