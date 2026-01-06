"use server"

import { currentUser } from "@clerk/nextjs/server"
import { db } from "../db"
import { revalidatePath } from "next/cache"
import { getRecords } from "./getRecords"
import { convertDate } from "@/helper/convertDate"

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

    const records = await getRecords();

    const existingRecords = records.find((record) => {
        const recordDate = new Date(record.date).getTime();
        const inputDate = new Date(data.date).getTime();

        return record.userId === user.id && recordDate === inputDate;

    });

    if (existingRecords) {
        await db.record.updateMany({
            where: {
                id: existingRecords.id
            },
            data: {
                amount: data.amountHours,
                text: data.quality
            }
        });
    } else {
        await db.record.create({
            data: {
                text: data.quality,
                amount: data.amountHours,
                date: new Date(data.date),
                userId: user.id
            }
        });
    }

    revalidatePath('/');
} 