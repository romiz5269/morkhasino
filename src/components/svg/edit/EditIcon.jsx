import React from 'react'

const EditIcon = ({color="white",width=19,height=19}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.092 3.19992L3.93448 9.71742C3.70198 9.96492 3.47698 10.4524 3.43198 10.7899L3.15448 13.2199C3.05698 14.0974 3.68698 14.6974 4.55698 14.5474L6.97198 14.1349C7.30948 14.0749 7.78198 13.8274 8.01448 13.5724L14.172 7.05492C15.237 5.92992 15.717 4.64742 14.0595 3.07992C12.4095 1.52742 11.157 2.07492 10.092 3.19992Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.06445 4.2876C9.38695 6.3576 11.067 7.9401 13.152 8.1501" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.39648 17H15.8965" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export default EditIcon
