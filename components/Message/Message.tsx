import { FC } from 'react'
import Image from 'next/image'
import { IUser } from '@/types/type'

const Message: FC<IUser> = ({ icon, name }: IUser) => {
    return (
        <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <div className="w-10 h-10 mr-3">
              <Image
                src={icon}
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
            <div className="flex-1 overflow-hidden">
                <div>
                    <span className="font-bold text-red-300 mr-1">{name}</span>
                    <span className="font-bold text-gray-400 text-xs">10:23</span>
                </div>
                <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
        </div>
    )
}

export default Message;