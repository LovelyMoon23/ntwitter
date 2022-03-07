import React from 'react'
import { authService } from '../fBase'

const Profile = () => {
  const onLogOutClick = () => authService.signOut()
  return (
    <>
      <button onClick={onLogOutClick}> Log out</button>
    </>
  )
}

export default Profile
