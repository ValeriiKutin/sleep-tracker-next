"use server"

import { getRecords } from "@/lib/actions/getRecords"

export const getAverageSleepMonth = async () => {
    const allUserRecords = await getRecords();

    const avgSleep = allUserRecords.reduce((avg, value, _, { length }) => {
        return avg + value.amount / length;
    }, 0);


    return avgSleep
}