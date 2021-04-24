import React, { useEffect } from 'react'
import logo from '../../assets/images/logo2.png'
import s from './Header.module.scss'
import signin_icon from '../../assets/images/signIn_icon.png'
import signout_icon from '../../assets/images/signOut_icon.png'
import ServiceButton from './../common/buttons/ServiceButton/ServiceButton'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  let location = useLocation()

  const checkAuthLocation = (location) => location == '/register' || location ==  '/login'
  const setHeaderBtns = () => {
    return <ServiceButton text="Sign In" icon={signin_icon} path="/login"/>
  }


  return (
      <header className={s.header}>
        <Link to="/home">
          <img src={logo} className={s.header__logo} alt="logo" />
        </Link>
        <div className={s.header__menu}>
          {!checkAuthLocation(location.pathname) && setHeaderBtns()}
          {/* <ServiceButton text="Sign Out" icon={signout_icon} path="/home"/> */}
        </div>
      </header>
  )
}

export default Header
