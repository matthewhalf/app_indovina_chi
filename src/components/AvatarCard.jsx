import React from 'react'
import { avatarDetails } from "../constants"

const AvatarCard = () => {
  return (
    <>
      {avatarDetails.map((avatar) => (
        <div key={avatar.title} className='text-center'>
          <img src={avatar.image} alt={avatar.title} width={300} height={300} className='rounded' />
          <h1>{avatar.title}</h1>
        </div>
      ))}
    </>
  )
}

export default AvatarCard
