import { SVGProps } from 'react'

export const ChatIcon: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='64'
    height='64'
    fill='none'
    viewBox='0 0 64 64'
    className='min-w-16'
    {...props}
  >
    <circle cx='32' cy='32' r='32' fill='#D479FF' fillOpacity='.2' />
    <path
      fill='url(#paint0_linear_3077_192)'
      fillRule='evenodd'
      d='M29 21.17h17.08v8.44c0 7.3-5.92 13.22-13.22 13.22H29a10.83 10.83 0 1 1 0-21.66ZM50.25 17v12.6A17.4 17.4 0 0 1 32.85 47H29a15 15 0 1 1 0-30h21.25Z'
      clipRule='evenodd'
    />
    <path className='fill-text' d='M27.75 34.5h8.75v.63a4.37 4.37 0 1 1-8.75 0v-.63Z' />
    <path
      className='fill-text'
      fillRule='evenodd'
      d='M25.25 32a2.5 2.5 0 0 0 2.39-3.24 1.25 1.25 0 1 1-1.65-1.65 2.5 2.5 0 1 0-.74 4.89ZM39 32a2.5 2.5 0 0 0 2.39-3.24 1.25 1.25 0 1 1-1.65-1.65A2.5 2.5 0 1 0 39 32Z'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient
        id='paint0_linear_3077_192'
        x1='32.13'
        x2='32.13'
        y1='47'
        y2='17'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#8044FF' />
        <stop offset='1' stopColor='#D479FF' />
      </linearGradient>
    </defs>
  </svg>
)
