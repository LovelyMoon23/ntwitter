import React, { useState } from 'react'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newAcount, setNewAcount] = useState(false)

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event
    if (name === 'email') {
      setEmail(value)
      console.log(email)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const onSubmit = (event) => {
    event.preventDefalut()
    console.log('onSubmit')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          required
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          required
        ></input>
        <input type="submit" value="Sign In"></input>
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  )
}

export default Auth
