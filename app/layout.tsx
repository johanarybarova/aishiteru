import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.scss'
import { cookies } from 'next/headers'
import { Layout } from '../components/Layout'
import { THEME } from '../utils/constants'

import { ThemeProvider } from './theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aishiteru - AI Chrome Chatbot',
  description: 'Testing the new window.ai Chrome API',
}

const rootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const cookieStore = cookies()
  const defaultTheme = cookieStore.get('theme')?.value || THEME.LIGHT

  return (
    <html lang='en' className={defaultTheme} style={{ colorScheme: defaultTheme }}>
      <head>
        <meta name='robots' content='noindex, nofollow' />
      </head>

      <body className={inter.className}>
        <ThemeProvider defaultTheme={defaultTheme}>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default rootLayout
