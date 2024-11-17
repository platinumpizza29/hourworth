import { z } from "zod";

const DailyHoursSchema = z.object({
  id: z.number().optional(), // Optional for new entries
  user_id: z.number(),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  hours_worked: z.number().min(0).max(24),
  week_number: z.number().min(1).max(52),
  month: z.number().min(1).max(12),
  year: z.number().min(1900),
});

const WeeklyHoursSchema = z.object({
  id: z.number().optional(),
  user_id: z.number(),
  week_number: z.number().min(1).max(52),
  year: z.number().min(1900),
  total_hours: z.number().min(0).max(168), // 168 is the max hours in a week
});

const MonthlySummarySchema = z.object({
  id: z.number().optional(),
  user_id: z.number(),
  month: z.number().min(1).max(12),
  year: z.number().min(1900),
  total_hours: z.number().min(0).max(744), // 744 is the max hours in a month
});

export type DailyHours = z.infer<typeof DailyHoursSchema>;
export type WeeklyHours = z.infer<typeof WeeklyHoursSchema>;
export type MonthlySummary = z.infer<typeof MonthlySummarySchema>;
