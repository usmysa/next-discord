import { FC } from 'react'
import { useUserContext } from '@/contexts/user'
import { IUser } from '@/types/type'
import Member from '@/components/Member/Member'

const ChannelList: FC = () => {
  const { state } = useUserContext()

  return (
    <div className="bg-gray-800 text-purple-lighter flex-none w-64 pb-6 hidden md:block">
      <div className="text-white mb-2 mt-3 px-4 flex justify-between border-b border-gray-600 py-1 shadow-xl">
        <div className="flex-auto">
          <h1 className="font-semibold text-xl leading-tight mb-1 truncate">Discord Clone</h1>
        </div>
      </div>
      <div className="mb-8">
        <div className="px-4 mb-2 text-white flex justify-between items-center">
          <div className="opacity-75">GENERAL</div>
          {/* <svg className="fill-current h-5 w-5 opacity-50 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z">
            </path>
          </svg> */}
        </div>
        <div className="bg-teal-dark cursor-pointer font-semibold py-1 px-4 text-gray-300"># general</div>
      </div>
      <div className="mb-8">
        <div className="px-4 mb-2 text-white flex justify-between items-center">
          <div className="opacity-75 cursor-pointer">Member</div>
        </div>
        {/* Self */}
        <Member {...state.user} />
        {/* Other */}
        {state.members.forEach((user: IUser) => (
          <Member {...user} />
        ))}
      </div>
    </div>
  )
}

export default ChannelList