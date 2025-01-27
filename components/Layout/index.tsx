import { cookies } from 'next/headers'

import { Header } from './Header'
import { THEME } from '../../utils/constants'
import { ReactNode } from 'react'

export const Layout = async ({ children }: { children: ReactNode }) => {
  const cookieStore = await cookies()
  const defaultTheme = cookieStore.get('theme')?.value || THEME.LIGHT

  return (
    <>
      <Header defaultTheme={defaultTheme} />
      <main className='mx-auto max-w-layout p-0 md:p-14'>{children}</main>
    </>
  )
}
