"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { createHourEntry } from "~/actions/hourlog";

export default function SheetComp() {
  const router = useRouter();
  const { user } = useUser();

  const [formData, setFormData] = useState({
    date: "",
    hoursWorked: "",
    category: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      if (!user) {
        alert("User not found. Please log in.");
        return;
      }

      const { date, hoursWorked, category, description } = formData;

      // Validate required fields
      if (!date || !hoursWorked || !category) {
        alert("Please fill in all required fields.");
        return;
      }

      await createHourEntry({
        userId: user.id,
        date: new Date(date),
        hoursWorked: parseFloat(hoursWorked),
        category,
        description: description || undefined,
      });

      alert("Hours logged successfully!");
      setFormData({ date: "", hoursWorked: "", category: "", description: "" });
      router.refresh(); // Refresh data on the page if needed
    } catch (error) {
      console.error("Error logging hours:", error);
      alert("Failed to log hours. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" className={"w-full"}>
          Log Daily Hours
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Log Daily Hours</SheetTitle>
          <SheetDescription>
            Enter your work hours for the day.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hoursWorked" className="text-right">
              Hours
            </Label>
            <Input
              id="hoursWorked"
              type="number"
              min="0"
              max="24"
              value={formData.hoursWorked}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input
              id="category"
              type="text"
              value={formData.category}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              type="text"
              placeholder="Optional"
              value={formData.description}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Saving..." : "Save Hours"}
          </Button>
          <SheetClose asChild>
            <Button variant="ghost" className="w-full">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
