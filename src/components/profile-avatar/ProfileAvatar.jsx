import Plus from 'components/svg/plus/Plus'
import React from 'react'

const ProfileAvatar = ({size=48}) => {
  return (
    <div className='relative'>
      <img src='../images/png/test-profile.png' width={size} height={size} className='rounded-full border-2' />
      <span className='absolute bottom-0 right-0 bg-secondary rounded-full'>
        <Plus width={18} height={18}/>
      </span>
    </div>
  )
}

export default ProfileAvatar
