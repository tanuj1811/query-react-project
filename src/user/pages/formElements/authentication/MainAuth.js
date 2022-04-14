import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import Login from './login'
import Signup from './signup'
import styles from './MainAuth.module.scss'

import { AuthContext } from '../../../../shared/context/authContext'
import { AccountContext } from './accountContext'

const backdropVariants = {
  expanded: {
    width: '233%',
    height: '1050px',
    borderRadius: '20%',
    transform: 'rotate(60deg)',
  },
  collapsed: {
    width: '110%',
    height: '600px',
    borderRadius: '50%',
    transform: 'rotate(60deg)',
  },
}

const expandingTransition = {
  type: 'spring',
  duration: 2.3,
  stiffness: 30,
}

const MainAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useContext(AuthContext)
  const [isExpanded, setExpanded] = useState(false)
  const [active, setActive] = useState('signin')

  const playExpandingAnimation = () => {
    setExpanded(true)
    setTimeout(() => {
      setExpanded(false)
    }, expandingTransition.duration * 1000 - 1500)
  }

  const switchToSignup = () => {
    playExpandingAnimation()
    setTimeout(() => {
      setActive('signup')
    }, 400)
  }

  const switchToSignin = () => {
    playExpandingAnimation()
    setTimeout(() => {
      setActive('signin')
    }, 400)
  }

  const loginSubmitHandler = (event) => {
    event.preventDefault()
    auth.login()
    navigate(-1)
  }

  const contextValue = { switchToSignup, switchToSignin }

  return (
    <AccountContext.Provider value={contextValue}>
      <form className={styles.boxContainer} onSubmit={loginSubmitHandler}>
        <div className={styles.topContainer}>
          <motion.div
            className={styles.BackDrop}
            initial={false}
            animate={isExpanded ? 'expanded' : 'collapsed'}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === 'signin' && (
            <div className={styles.headerContainer}>
              <h2>Welcome</h2>
              <h2>Back</h2>
              <h5>Please log-in to continue !</h5>
            </div>
          )}
          {active === 'signup' && (
            <div className={styles.headerContainer}>
              <h2>Create</h2>
              <h2>Account</h2>
              <h5>Please sing-up to continue !</h5>
            </div>
          )}
        </div>
        <div className={styles.innerContainer}>
          {active === 'signin' && <Login />}
          {active === 'signup' && <Signup />}
        </div>
      </form>
    </AccountContext.Provider>
  )
}

export default MainAuth
