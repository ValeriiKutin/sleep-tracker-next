"use client"
import { convertDate } from '@/helper/convertDate'
import { SleepHistoryProps } from '@/types/RecordType'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const SleepChartInfo = ({ records }: SleepHistoryProps) => {
    const changedRecordsDate = records.map((record) => ({
        ...record,
        date: record.date ? convertDate(record.date) : record.date
    }))

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={changedRecordsDate} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" label={{ value: "Date", angle: 0, position: "center", dy: 10 }} />
                <YAxis label={{ value: 'Hours Slept', angle: -90, position: 'center' }} />
                <Tooltip />
                <Bar dataKey="amount">
                    {records.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.amount >= 8 ? "green" : "red"}
                        />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default SleepChartInfo