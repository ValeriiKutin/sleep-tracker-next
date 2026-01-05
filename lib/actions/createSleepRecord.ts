"use server"

import { currentUser } from "@clerk/nextjs/server"
import { db } from "../db"
import { revalidatePath } from "next/cache"

type CreateSleepRecordInput = {
    quality: string,
    amountHours: number,
    date: string
}

export const createSleepRecord = async (data: CreateSleepRecordInput) => {
    const user = await currentUser();

    if (!user) {
        return [];
    }

    await db.record.create({
        data: {
            text: data.quality,
            amount: data.amountHours,
            date: new Date(data.date),
            userId: user.id
        }
    });

    revalidatePath('/');

} 