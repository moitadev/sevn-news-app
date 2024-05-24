import { SVGProps } from 'react'

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill='none' {...props}>
      <path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export { ArrowLeft }
