"use client"
import React from 'react'
import FormSleepRecords from './History/FormSleepRecords';

const AddNewRecord = () => {
    return (
        <div>
            <h2 className='text-center text-red-500'>Track Your Sleep</h2>
            <FormSleepRecords />
        </div>
    )
}

export default AddNewRecord;