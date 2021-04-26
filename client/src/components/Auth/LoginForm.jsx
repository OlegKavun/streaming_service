import React from 'react'
import s from './AuthComponent.module.scss'
import CommonButton from './../common/buttons/CommonButton'

const Loginform = (props) => {
  const onSubmit = (e) => {

  }

    return (
        <form className={s.form} onSubmit={onSubmit}>
          <input type="text" className={s.form__input} placeholder="Email"/>
          <input type="password" className={s.form__input} placeholder="Password"/>
          <CommonButton text="Sign in"/>
        </form>
    )
}

export default Loginform