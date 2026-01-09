"use server"

import { getRecords } from "@/lib/actions/getRecords"

export const getAverageSleepMonth = async () => {
    const allUserRecords = await getRecords();
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();


    const avgSleepMonth = allUserRecords.filter((record) => {
        const monthIndex = new Date(record.date).getMonth();
        return monthIndex === currentMonth;
    })

    const avgSleep = avgSleepMonth.reduce((avg, value, _, { length }) => {
        return avg + value.amount / length;
    }, 0);


    return avgSleep.toFixed(1);
}
