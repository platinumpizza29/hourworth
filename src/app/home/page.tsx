import { currentUser } from "@clerk/nextjs/server";
import ChartComp from "~/components/chartComp";
import NavComp from "~/components/nav";
import RecentsComp from "~/components/recents";
import SheetComp from "~/components/sheetComp";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default async function HomePage() {
  const user = await currentUser();
  return (
    <div className="mx-4 min-h-[100dvh] md:mx-10 lg:mx-20 xl:mx-40">
      <NavComp />
      {/*stats*/}
      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription className={"text-xl font-black text-black"}>
              {user?.username}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <p>Track your time efficiently</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total hours</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Weekly Target</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Log Hours</CardTitle>
            <CardDescription>
              <SheetComp />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      
          <ChartComp/>
          <RecentsComp/>
     
      </div>
      {/*sheet*/}
    </div>
  );
}
