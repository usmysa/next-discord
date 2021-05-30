import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { useUserContext } from '../contexts/user'

const Join: FC = () => {
  const { state, setState } = useUserContext()
  const style = {
    backgroundImage: "url('./join.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  return (
    <div className="h-screen font-sans bg-cover" style={style}>
      <Head>
        <title>Join Page</title>
      </Head>
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form
              onSubmit={event => {
                event.preventDefault()
                Router.push('/')
              }}
              className="max-w-sm m-4 p-10 bg-bg rounded shadow-xl"
            >
              <div className="bg-bg-deep h-16 w-16 flex ml-auto mr-auto items-center justify-center text-black text-2xl font-semibold rounded-full mb-1 overflow-hidden">
                <Image
                  src={state.user.icon}
                  width={500}
                  height={500}
                />
              </div>
              <p className="text-white font-medium text-center text-lg font-bold m-4">Welcome back!</p>
              <div className="">
                <label className="block text-sm text-gray-500 mb-1" htmlFor="username">User Name</label>
                <input
                  id="username"
                  type="input"
                  onChange={e => {
                    state.user.name = e.target.value
                    setState(state)
                  }}
                  className="w-full px-5 py-1 text-gray-500 bg-bg-deep rounded focus:outline-none focus:ring-2 focus:ring-main"
                  maxLength={20}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mt-4 items-center flex justify-between">
                <button className="w-full px-4 py-1 text-white font-light tracking-wider bg-main rounded"
                  type="submit">Join</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join;