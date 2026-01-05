import { currentUser } from "@clerk/nextjs/server"
import { db } from "../db"

export const getRecords = async () => {
    const user = await currentUser();

    if (!user) {
        return [];
    }

    const records = db.record.findMany({
        where: {
            userId: user.id
        },
        orderBy: {
            date: "desc"
        }
    });

    return records;
}