import { AppProps } from 'next/app'
import { MessageProvider } from '@/contexts/message'
import { UserProvider } from '@/contexts/user'
import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <MessageProvider>
        <Component {...pageProps} />
      </MessageProvider>
    </UserProvider>
  )
}

export default App