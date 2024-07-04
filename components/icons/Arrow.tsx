import { SVGProps } from 'react'

export const Arrow: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='64'
    height='64'
    fill='none'
    viewBox='0 0 64 64'
    {...props}
  >
    <circle
      cx='32'
      cy='32'
      r='30'
      stroke='url(#paint0_linear_20816_33)'
      strokeWidth='4'
      transform='rotate(90 32 32)'
    />
    <path
      fill='url(#paint1_linear_20816_33)'
      fillRule='evenodd'
      d='m33.16 18.33-1.41-1.41-1.42 1.41-14 14 2.83 2.83 10.59-10.59v24.18h4V24.57l10.58 10.59 2.83-2.83-14-14Z'
      clipRule='evenodd'
    />
    <defs>
      <linearGradient
        id='paint0_linear_20816_33'
        x1='33.5'
        x2='6.25'
        y1='45'
        y2='3.25'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#8044FF' />
        <stop offset='1' stopColor='#D479FF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_20816_33'
        x1='14.13'
        x2='72.5'
        y1='85.12'
        y2='49.28'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#8044FF' />
        <stop offset='.97' stopColor='#D479FF' />
      </linearGradient>
    </defs>
  </svg>
)
