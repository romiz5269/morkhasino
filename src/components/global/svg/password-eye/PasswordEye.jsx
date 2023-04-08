import React from 'react'

const PasswordEye = ({color="#051429",width=18,height=18}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6845 8.99994C11.6845 10.4849 10.4845 11.6849 8.99945 11.6849C7.51445 11.6849 6.31445 10.4849 6.31445 8.99994C6.31445 7.51494 7.51445 6.31494 8.99945 6.31494C10.4845 6.31494 11.6845 7.51494 11.6845 8.99994Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.00086 15.2025C11.6484 15.2025 14.1159 13.6425 15.8334 10.9425C16.5084 9.88504 16.5084 8.10754 15.8334 7.05004C14.1159 4.35004 11.6484 2.79004 9.00086 2.79004C6.35336 2.79004 3.88586 4.35004 2.16836 7.05004C1.49336 8.10754 1.49336 9.88504 2.16836 10.9425C3.88586 13.6425 6.35336 15.2025 9.00086 15.2025Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>    
  )
}

export default PasswordEye
