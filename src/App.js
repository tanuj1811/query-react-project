import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthContext } from './shared/context/authContext'

import Home from './user/pages/home'
import Navigation from './shared/components/Navigation/Header'
import styles from './index.scss'
import MainAuth from './user/pages/formElements/authentication/MainAuth'
import NewQuery from './query/pages/newQuery'
import AllQueries from './query/pages/AllQueries'
import Query from './query/pages/Query'
import Profile from './user/pages/Profile'
import EditQuery from './query/pages/editQuery/editQuery'

const App = () => {
  const [isLoggedIn, setIsLogin] = useState(false)

  const login = useCallback(() => {
    setIsLogin(true)
  }, [])

  const logout = useCallback(() => {
    setIsLogin(false)
  }, [])
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
      }}
    >
      <React.Fragment>
        <Router>
          <Navigation />
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} exact={true} />
              <Route path="/query" element={<NewQuery />} exact={true} />
              <Route path="/:queryId/query" element={<Query />} exact={true} />
              <Route path="/queries" element={<AllQueries />} exact={true} />
              <Route path="/auth" element={<MainAuth />} exact={true} />
              <Route path="/users/:userId" element={<Profile />} exact={true} />
              <Route
                path="/edit/:queryId"
                element={<EditQuery />}
                exact={true}
              />
            </Routes>
            {/* <Navigate to="/" element={<Home />} /> */}
          </main>
          {/* <footer><MainFooter /></footer> */}
        </Router>
      </React.Fragment>
    </AuthContext.Provider>
  )
}

export default App
