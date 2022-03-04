import React, { useState } from 'react'
import 'firebase/compat/auth'
import { authService } from 'fBase'
import AppRouter from 'components/AppRouter'

function App() {
  const [isLoggedin, setIsLoggedin] = useState(authService.currentUser)
  return (
    <>
      {console.log(authService.currentUser)}
      <AppRouter isLoggedin={isLoggedin}></AppRouter>
      <footer> &copy; {new Date().getFullYear()}</footer>
    </>
  )
}

export default App
