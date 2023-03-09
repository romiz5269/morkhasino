import React from 'react'

const SingleBlueDot = ({color="#3A57E8",width=12,height=12}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
     <circle cx="5.22842" cy="5.22842" r="5.22842" transform="matrix(-1 0 0 1 11.2109 0.690918)" fill={color}/>
    </svg>
  )
}

export default SingleBlueDot
