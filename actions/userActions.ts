"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

export const getAllUsers = async () => {
    const data = await db.select().from(users)
    return data
}

export const addUser = async () => {
    await db.insert(users).values({
        name: "user1",
        email: "reindraantoni@gmail.com"
    })
    revalidatePath("/")
}