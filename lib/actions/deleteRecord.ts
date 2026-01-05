"use server"
import { currentUser } from "@clerk/nextjs/server";
import { db } from "../db";
import { revalidatePath } from "next/cache"

export const deleteRecord = async (recordId: string) => {
    const user = await currentUser();

    if (!user) {
        return [];
    }

    await db.record.delete({
        where: {
            id: recordId,
            userId: user.id
        }

    });
    revalidatePath('/');
}

/* 


*/