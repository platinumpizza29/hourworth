/*
  Warnings:

  - A unique constraint covering the columns `[userId,month,year]` on the table `MonthlySummary` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,startDate]` on the table `WeeklySummary` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MonthlySummary_userId_month_year_key" ON "MonthlySummary"("userId", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "WeeklySummary_userId_startDate_key" ON "WeeklySummary"("userId", "startDate");
