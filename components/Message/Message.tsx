import { FC } from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import { IMessage } from '@/types/type'

const Message: FC<IMessage> = ({ content, sendedAt, senderIcon, senderName }: IMessage) => {
    return (
        <li className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            {
                senderIcon
                ? 
                    <div className="w-10 h-10 mr-3">
                        <Image
                            src={senderIcon}
                            width={500}
                            height={500}
                            className="rounded-full"
                        />
                    </div>
                : ''
            }
            <div className="flex-1 overflow-hidden">
                <div>
                    <span className="font-bold text-red-300 mr-1">{senderName}</span>
                    <span className="font-bold text-gray-500 text-xs">{dayjs(sendedAt).format('YYYY-MM-DD HH:mm:ss')}</span>
                </div>
                <p className="text-white leading-normal">{content}</p>
            </div>
        </li>
    )
}

export default Message