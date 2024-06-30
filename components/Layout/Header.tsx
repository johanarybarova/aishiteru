'use client'

import Link from 'next/link'

import { LogoIcon } from '../icons/LogoIcon'
import { LightSwitch } from '../LightSwitch'

export const Header = ({ defaultTheme }: { defaultTheme: string }) => (
  <header className='fixed top-0 z-header w-full border-b border-low-contrast bg-background'>
    <nav className='px-4 md:px-14 mx-auto flex max-w-layout flex-row items-center justify-between py-3.5'>
      <Link href='/' aria-label='Chrome AI Chatbot' className='text-3xl focus:fill-primary'>
        <LogoIcon className='h-6 fill-text md:h-7' />
      </Link>
      <LightSwitch defaultTheme={defaultTheme} />
    </nav>
  </header>
)
