import React, { useContext } from 'react'
import { useForm } from '../../../../shared/hooks/form-hook'
import styles from './loginAndSignup.module.scss'
import { AccountContext } from './accountContext'
import Input from '../../../../shared/components/UIElements/Input'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../../../shared/util/validator'
const Signup = () => {
  const { switchToSignin } = useContext(AccountContext)
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
          id="userName"
          element="input"
          type="text"
          placeholder="UserName"
          errText="Invalid Entered Text"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          className={styles.formContainer__input}
          id="userPassword"
          element="input"
          type="password"
          placeholder="password"
          errText="Invalid Entered Text"
          validators={[VALIDATOR_MINLENGTH(8)]}
          onInput={inputHandler}
        />
      </div>
      <span style={{ display: 'flex', height: '10px' }}></span>
      <button className={styles.submitButton} type="submit">
        Signin
      </button>
      <span style={{ display: 'flex', height: '1em' }}></span>

      <a className={styles.mutedLink} href="#">
        Already have an account?{' '}
        <a className={styles.boldLink} href="#" onClick={switchToSignin}>
          Login
        </a>
      </a>
    </div>
  )
}

export default Signup
