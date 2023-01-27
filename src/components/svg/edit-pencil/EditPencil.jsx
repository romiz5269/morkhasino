import React from 'react'

const EditPencil = ({color="#667085",width=20,height=21}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.83398 2.99993C5.61511 2.78106 5.35528 2.60744 5.06931 2.48899C4.78334 2.37054 4.47685 2.30957 4.16732 2.30957C3.85779 2.30957 3.55129 2.37054 3.26532 2.48899C2.97936 2.60744 2.71952 2.78106 2.50065 2.99993C2.28178 3.2188 2.10816 3.47863 1.98971 3.7646C1.87126 4.05057 1.81029 4.35706 1.81029 4.66659C1.81029 4.97612 1.87126 5.28262 1.98971 5.56859C2.10816 5.85455 2.28178 6.11439 2.50065 6.33326L13.7507 17.5833L18.334 18.8333L17.084 14.2499L5.83398 2.99993Z" stroke={color} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  )
}

export default EditPencil
