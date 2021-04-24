import React from 'react'
import logo from '../../assets/images/logo2.png'
import s from './Header.module.scss'
import signin_icon from '../../assets/images/signIn_icon.png'
import signup_icon from '../../assets/images/signUp_icon.png'
import ServiceButton from './../common/buttons/ServiceButton/ServiceButton'

const Header = () => {
  return (
      <header className={s.header}>
        <img src={logo} className={s.header__logo} alt="logo" />
        <div className={s.header__menu}>
          <ServiceButton text="Sign In" icon={signin_icon} path="/login"/>
          {/* <ServiceButton text="Sign Up" icon={signup_icon} path="/home"/> */}
        </div>
      </header>
  )
}

export default Header
