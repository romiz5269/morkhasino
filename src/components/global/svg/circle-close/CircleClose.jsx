import React from 'react'

const CircleClose = ({color="#848181",width=30,height=30}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5Z" stroke={color} strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.4629 18.5374L18.5379 11.4624" stroke={color} strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.5379 18.5374L11.4629 11.4624" stroke={color} strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

export default CircleClose
