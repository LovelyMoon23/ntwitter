import React, { useState, useEffect } from 'react'
import 'firebase/compat/auth'
import { authService } from 'fBase'
import AppRouter from 'components/AppRouter'

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedin, setIsLoggedin] = useState(false)

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedin(true)
      } else {
        setIsLoggedin(false)
      }
      setInit(true)
    })
  }, [])
  return (
    <>
      {init ? (
        <AppRouter isLoggedin={isLoggedin}></AppRouter>
      ) : (
        'initializing...'
      )}
      <footer> &copy; {new Date().getFullYear()}</footer>
    </>
  )
}

export default App
