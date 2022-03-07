import React, { useState } from 'react'
import { authService, firebaseInstance } from '../fBase'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newAccount, setNewAccount] = useState(true)
  const [error, setError] = useState('')

  const onChange = (event) => {
    const {
      target: { name, value }, // 변화가 일어나는 부분이 target. 그안에 name, value가 있다.
    } = event
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const toggleAccount = (prev) => !prev

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      let data
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(email, password)
      } else {
        data = await authService.signInWithEmailAndPassword(email, password)
      }
      console.log(data)
    } catch (error) {
      setError(error.message)
    }
  }

  const onSocialClick = async (event) => {
    // Creates the provider object.
    const {
      target: { name },
    } = event
    let provider
    if (name === 'Google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider()
    } else if (name === 'Github') {
      provider = new firebaseInstance.auth.GithubAuthProvider()
    }
    // Sign in with popup:
    const data = await authService.signInWithPopup(provider)
    console.log(data)
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
        <input
          type="submit"
          value={newAccount ? 'Create Account' : 'Log In'}
        ></input>
        {error}
        <span onClick={toggleAccount}>
          {newAccount ? 'Sign in' : ' Create Account'}{' '}
        </span>
      </form>
      <div>
        <button name="Google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <button name="Github" onClick={onSocialClick}>
          Continue with Github
        </button>
      </div>
    </div>
  )
}

export default Auth
