import React from 'react'

const ChevronDown = ({color="#005ADC",width=20,height=20}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1594 7.59818L11.0417 12.6455C10.4374 13.2416 9.45515 13.2348 8.85907 12.6304L3.81173 7.51272" stroke={color} stroke-width="1.55909" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export default ChevronDown
