import { useState, createContext, useContext } from 'react'
import { IUser, IUserContent } from '@/types/type'

const randomIcon = () => {
  const max = 6;
  const id = Math.floor(Math.random() * max)
  return `/embed/avatars/${id}.png`
}
const initialState: { members: IUser[], user: IUser } = {
  members: [],
  user: {
    icon: randomIcon(),
    name: null,
  }
}

const UserContext = createContext<IUserContent>({
    state: { ...initialState },
    setState: () => {},
})

const UserProvider = ({ children }: any) => {
  const [state, setState] = useState({ ...initialState })
  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  )
}
  
const useUserContext = () => useContext(UserContext)

export { UserProvider, useUserContext }
