import React from 'react'

const TrashIcon = ({color="#667085",width=20,height=21}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 5.50008H15.8333M15.8333 5.50008H2.5M15.8333 5.50008V17.1667C15.8333 17.6088 15.6577 18.0327 15.3452 18.3453C15.0326 18.6578 14.6087 18.8334 14.1667 18.8334H5.83333C5.39131 18.8334 4.96738 18.6578 4.65482 18.3453C4.34226 18.0327 4.16667 17.6088 4.16667 17.1667V5.50008H15.8333ZM13.3333 5.50008V3.83341C13.3333 3.39139 13.1577 2.96746 12.8452 2.6549C12.5326 2.34234 12.1087 2.16675 11.6667 2.16675H8.33333C7.89131 2.16675 7.46738 2.34234 7.15482 2.6549C6.84226 2.96746 6.66667 3.39139 6.66667 3.83341V5.50008M11.6667 9.66675V14.6667M8.33333 9.66675V14.6667" stroke={color} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  )
}

export default TrashIcon