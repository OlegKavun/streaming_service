import React from 'react'
import s from './AuthComponent.module.scss'
import CommonButton from './../common/buttons/CommonButton'

const RegisterForm = (props) => {
  const onSubmit = (e) => {

  }
  
    return (
        <form className={s.form} onSubmit={onSubmit}>
          <input type="text" className={s.form__input} placeholder="Login"/>
          <input type="text" className={s.form__input} placeholder="Email"/>
          <input type="password" className={s.form__input} placeholder="Password"/>
          <input type="password" className={s.form__input} placeholder="Confirm password"/>
          <CommonButton text="Sign up"/>
        </form>
    )
}

export default RegisterForm