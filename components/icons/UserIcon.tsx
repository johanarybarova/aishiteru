import { SVGProps } from 'react'

export const UserIcon: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='64'
    height='64'
    fill='none'
    viewBox='0 0 64 64'
    className='min-w-16'
    {...props}
  >
    <circle cx='32' cy='32' r='32' fill='#8044FF' fillOpacity='.2' />
    <path
      fill='url(#paint0_linear_3077_191)'
      fillRule='evenodd'
      d='M40 26.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-.02 8.74a11.5 11.5 0 1 0-15.27-.28A15.04 15.04 0 0 0 15 49h34a15.02 15.02 0 0 0-9.02-13.76ZM32.5 38H30a11 11 0 0 0-10.25 7h24.5A11 11 0 0 0 34 38h-1.5Z'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient
        id='paint0_linear_3077_191'
        x1='32'
        x2='32'
        y1='49'
        y2='15'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#8044FF' />
        <stop offset='1' stopColor='#D479FF' />
      </linearGradient>
    </defs>
  </svg>
)
