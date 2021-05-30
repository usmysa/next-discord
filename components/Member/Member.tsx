import { FC } from 'react'
import Image from 'next/image'
import { IUser } from '@/types/type'

const Member: FC<IUser> = ({ icon, name }: IUser) => {
  return (
    <div className="bg-teal-dark flex hover:bg-gray-800 py-1 px-4 text-gray-300">
      <div className="bg-white h-6 w-6 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden mr-2">
        <Image
          src={icon}
          width={500}
          height={500}
        />
      </div>
      <span>{name}</span>
    </div>
  )
}

export default Member