import NavComp from "~/components/nav";
import { Button } from "~/components/ui/button";
import { db } from "~/server/db";
import { currentUser } from "@clerk/nextjs/server";
import { UserTable } from "~/types/userTypes";

export default async function MyHours() {
  const user = await currentUser();
  const hours = (await db.hour.findMany({
    where: {
      userId: user?.id,
    },
  })) as UserTable[];

  console.log(hours);

  return (
    <div className={"min-h-[100dvh]"}>
      <NavComp />
      <div className="mx-4 md:mx-12 lg:mx-24 xl:mx-48">
        <div className="my-4 flex flex-row items-center justify-between gap-8">
          <h1>My Hours</h1>
          <div className="space-x-4">
            <Button>Export</Button>
            <Button>Filter</Button>
          </div>
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Date
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Hours Worked
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {hours.map((hour, key) => (
                <tr key={key} className={"ltr:text-left rtl:text-right"}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {hour.date.toISOString().slice(0, 10)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {hour.hoursWorked}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {hour.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
