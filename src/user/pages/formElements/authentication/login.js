import React, { useContext } from 'react'

import { useForm } from '../../../../shared/hooks/form-hook'

import styles from './loginAndSignup.module.scss'
import { AccountContext } from './accountContext'
import Input from '../../../../shared/components/UIElements/Input'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../../../../shared/util/validator'
import Button from '../../../../shared/components/UIElements/Button'
import { Route } from 'react-router-dom'

const Login = () => {
  const { switchToSignup } = useContext(AccountContext)
  const [formState, inputHandler] = useForm(
    {
      userEmail: { value: '', isValid: false },
      userPassword: { value: '', isValid: false },
    },
    false,
  )

  return (
    <div className={styles.boxContainer}>
      <div className={styles.formContainer}>
        <Input
          className={styles.formContainer__input}
          id="userEmail"
          element="input"
          type="email"
          placeholder="Email"
          errText="Invalid Entered Text"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
        />
        <Input
          className={styles.formContainer__input}
          id="userPassword"
          element="input"
          type="password"
          placeholder="Password"
          errText="Invalid Entered Text"
          validators={[VALIDATOR_MINLENGTH(3)]}
          onInput={inputHandler}
        />
      </div>
      <span style={{ display: 'flex', height: '10px' }}></span>
      <a className={styles.mutedLink} href="#">
        Forget your password ?
      </a>
      <span style={{ display: 'flex', height: '1.6em' }}></span>
      <button
        disabled={!formState.isValid}
        className={styles.submitButton}
        type="submit"
      >
        Signin
      </button>
      <span style={{ display: 'flex', height: '1em' }}></span>

      <a className={styles.mutedLink} href="#">
        Don't have an account?{' '}
        <a className={styles.boldLink} href="#" onClick={switchToSignup}>
          Signup
        </a>
      </a>
    </div>
  )
}

export default Login
