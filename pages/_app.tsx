import { AppProps } from 'next/app'
import { UserProvider } from '@/contexts/user'
import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default App