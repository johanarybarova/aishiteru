import { useTheme } from 'next-themes'
import nookies from 'nookies'

import { SECONDS_IN_YEAR, THEME } from '../../utils/constants'
import { SunIcon } from './SunIcon'
import { MoonIcon } from './MoonIcon'

export const LightSwitch = ({ defaultTheme }: { defaultTheme: string }) => {
  const { theme, setTheme } = useTheme()

  const currentTheme = theme || defaultTheme
  const nextTheme = currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK

  const toggleTheme = () => {
    setTheme(nextTheme)
    nookies.set(null, 'theme', nextTheme, {
      path: '/',
      maxAge: SECONDS_IN_YEAR,
    })
  }

  return (
    <button
      className='group flex h-8 items-center rounded-full bg-low-contrast text-base hover:text-primary w-14 md:text-lg'
      onClick={toggleTheme}
      aria-label={`Setup ${currentTheme === THEME.DARK ? 'light' : 'dark'} mode`}
    >
      <span
        className={`rouned flex h-full w-full items-center justify-center rounded-full bg-background text-base transition-transform duration-300 ease-in-out md:mx-1 md:h-6 md:w-6 ${
          currentTheme === THEME.DARK ? 'md:translate-x-0' : 'md:translate-x-full'
        }`}
      >
        {currentTheme === THEME.DARK ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  )
}
