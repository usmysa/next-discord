import { FC, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { useUserContext } from '@/contexts/user'
import SiderBar from '@/components/SideBar/SideBar'
import ChannelList from '@/components/ChannelList/ChannelList'
import Message from '@/components/Message/Message'

const Top: FC = () => {
	const { state } = useUserContext()
	useEffect(() => {
		if (state.user.name == null) Router.push('/join')

	}, [])

	return (
		<div className="antialiased h-screen flex">
      <Head>
        <title>Discord Clone</title>
      </Head>
			<SiderBar />
			<ChannelList />
			<div className="flex-1 flex flex-col bg-gray-700 overflow-hidden">
				<div className="border-b border-gray-600 flex px-6 py-2 items-center flex-none shadow-xl">
					<div className="flex flex-col">
						<h3 className="text-white mb-1 font-bold text-xl text-gray-100">
							<span className="text-gray-400">#</span> general</h3>
					</div>
				</div>
				<div className="px-6 py-4 flex-1 overflow-y-scroll">
					{/* Messages */}
					<Message {...state.user} />
				</div>
				<div className="pb-6 px-4 flex-none">
					<div className="flex rounded-lg overflow-hidden">
						<span className="text-3xl text-grey border-r-4 border-gray-600 bg-gray-600 p-2">
							<svg className="h-6 w-6 block bg-gray-500 rounded-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" fill="#FFFFFF">
								</path>
							</svg>
						</span>
						<input type="text" className="w-full px-4 bg-gray-600 text-gray-400 focus:outline-none" placeholder="Message #general" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Top
