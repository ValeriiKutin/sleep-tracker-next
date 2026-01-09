"use server"
import { getAverageSleepMonth } from '@/helper/getAverageSleepMonth'
import React from 'react'

const AvgSleep = async () => {
    const avg = await getAverageSleepMonth()
    return (
        <div className='bg-white p-7'>
            <h3>Your Average Sleep Current Month</h3>
            <span className='text-blue-600 font-bold text-3xl'>{avg} hours</span>
        </div>
    )
}

export default AvgSleep;