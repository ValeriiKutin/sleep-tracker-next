"use client"

import { deleteRecord } from '@/lib/actions/deleteRecord';

type DeleteBtnProps = {
    recordId: string
}

const DeleteBtn = ({ recordId }: DeleteBtnProps) => {
    return (
        <button onClick={() => deleteRecord(recordId)} className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition cursor-pointer ">✖</button>
    )
}

export default DeleteBtn;

