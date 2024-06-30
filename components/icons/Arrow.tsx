import { SVGProps } from 'react'

export const Arrow: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width='65'
    height='65'
    viewBox='0 0 65 65'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle
      cx='32.2549'
      cy='32.2549'
      r='30'
      transform='rotate(90 32.2549 32.2549)'
      stroke='url(#paint0_linear_3077_152)'
      strokeWidth='4'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M33.4144 18.5856L32.0002 17.1714L30.5859 18.5856L16.5859 32.5856L19.4144 35.414L30.0002 24.8282L30.0002 48.9998H34.0001L34.0002 24.8282L44.5859 35.414L47.4144 32.5856L33.4144 18.5856Z'
      fill='url(#paint1_linear_3077_152)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_3077_152'
        x1='57'
        y1='66.0098'
        x2='6.5'
        y2='3.50977'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#8044FF' />
        <stop offset='1' stopColor='#D479FF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_3077_152'
        x1='14.3839'
        y1='85.3752'
        x2='72.7596'
        y2='49.5318'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#8044FF' />
        <stop offset='0.97061' stopColor='#D479FF' />
      </linearGradient>
    </defs>
  </svg>
)
