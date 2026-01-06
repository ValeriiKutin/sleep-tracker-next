"use server"
import { getRecords } from '@/lib/actions/getRecords'
import React from 'react'
import { ResponsiveContainer } from 'recharts';
import SleepChartInfo from './SleepChartInfo';

const SleepChart = async () => {
    const allUserRecords = await getRecords();
    return <SleepChartInfo records={allUserRecords} />
}

export default SleepChart;