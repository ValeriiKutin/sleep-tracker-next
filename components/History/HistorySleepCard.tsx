import { convertDate } from "@/helper/convertDate"
import { Record } from "@prisma/client"
import DeleteBtn from "../DeleteBtn/DeleteBtn"

type SleepHistoryProps = {
    records: Record[]
}

const HistorySleepCard = ({ records }: SleepHistoryProps) => {

    return (
        <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-center text-red-500'>Sleep History</h2>
            <ul>
                {records.map((record) => (
                    <li key={record.id} className="border border-l-pink-800 border-l-4 rounded-2xl p-5 mb-4 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span>{convertDate(record.createdAt)}</span>
                            <span className="font-bold">{record.amount} hours</span>
                            <span>Sleep mode: {record.text}</span>
                        </div>
                        <DeleteBtn recordId={record.id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HistorySleepCard;