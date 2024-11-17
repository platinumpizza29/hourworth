import * as z from "zod";

export const UserTableSchema = z.object({
    "id": z.string(),
    "userId": z.string(),
    "date": z.coerce.date(),
    "hoursWorked": z.number(),
    "category": z.string(),
    "description": z.string(),
    "createdAt": z.coerce.date(),
});
export type UserTable = z.infer<typeof UserTableSchema>;
