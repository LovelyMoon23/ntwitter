import React, { useState } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Auth from 'routes/Auth'
import Home from 'routes/Home'
import Profile from 'routes/Profile'
import NotFound from 'routes/NotFound'
import Navigation from 'components/Navigation'

const AppRouter = ({ isLoggedin }) => {
  return (
    <Router>
      {isLoggedin && <Navigation />}
      <Switch>
        {isLoggedin ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
          </>
        )}
      </Switch>
      <Redirect from="*" to="/" />
    </Router>
  )
}

export default AppRouter
