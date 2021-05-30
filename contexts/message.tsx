import { useState, createContext, useContext } from 'react'
import { IMessage, IMessageContent } from '@/types/type'

const initialState: { messages: IMessage[] } = {
  messages: []
}

const MessageContext = createContext<IMessageContent>({
    state: { ...initialState },
    setState: () => {},
})

const MessageProvider = ({ children }: any) => {
  const [state, setState] = useState({ ...initialState })
  return (
    <MessageContext.Provider value={{ state, setState }}>
      {children}
    </MessageContext.Provider>
  )
}
  
const useMessageContext = () => useContext(MessageContext)

export { MessageProvider, useMessageContext }
