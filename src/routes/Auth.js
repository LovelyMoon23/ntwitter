import React, { useState } from 'react'

const Auth = () => {
  const [] = useState()
  return (
    <div>
      <form>
        <input type="text" placeholder="Email" required></input>
        <input type="password" placeholder="Password" required></input>
        <input type="submit" value="Log In"></input>
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  )
}

export default Auth
