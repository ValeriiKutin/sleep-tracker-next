"use client"
import React, { useState } from 'react'

const FormSleepRecords = () => {
    const [quality, setQuality] = useState('');
    const [date, setDate] = useState('');
    const [amountHours, setAmountHours] = useState(0);
    return (
        <form>
            <div className='flex flex-col md:flex-row md:space-x-4'>
                <div className='flex-1'>
                    <label htmlFor="sleep-quality" className='text-sm text-gray-600 mb-1.5'>Sleep Quality</label>
                    <select name="" id="sleep-quality" className='border rounded-md p-2.5 text-gray-700 text-lg w-full min-h-12.5' onChange={(e) => setQuality(e.target.value)}>
                        <option value="" disabled>Sleep quality...</option>
                        <option value="refreshed">🌞 Refreshed</option>
                        <option value="tired">😴 Tired</option>
                        <option value="neutral">😐 Neutral</option>
                        <option value="exhausted">😫 Exhausted</option>
                        <option value="Energetic">⚡ Energetic</option>
                    </select>
                </div>
                <div className='flex-1'>
                    <label htmlFor="sleep-date" className='text-sm text-gray-600 mb-1.5'>Sleep Date</label>
                    <input id='sleep-date' type="date" className='border rounded-md p-2.5 text-gray-700 text-lg w-full min-h-12.5' onChange={(e) => setDate(e.target.value)} />
                </div>
            </div>
            <div className='flex flex-col mt-4'>
                <label htmlFor="hours-slept" className='text-sm text-gray-600 mb-1.5'>Hours Slept</label>
                <span className='text-xs mb-3'>(Select between 0 and 12 in steps of 0.5)</span>
                <input
                    type="range"
                    id='hours-slept'
                    min="0"
                    max="12"
                    step="0.5"
                    className="w-full cursor-pointer mb-2"
                    onChange={(e) => setAmountHours(Number(e.target.value))}
                />
                <span className='text-center'> 7 hours</span>
            </div>
            <button type='submit' className='w-full bg-purple-700 p-3 text-white rounded-xl cursor-pointer mt-4'>Add Sleep Record</button>
        </form>
    )
}

export default FormSleepRecords;