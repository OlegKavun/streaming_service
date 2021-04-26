import React from 'react'
import s from './AuthComponent.module.scss'
import { NavLink, Route } from 'react-router-dom'
import Loginform from './LoginForm'
import RegisterForm from './RegisterForm'

const AuthComponent = (props) => {
    return (
        <div className={s.auth}>
            <h1 className={s.auth__title}>{props.form === 'login' ? 'LOGIN' : 'REGISTER'}</h1>
            <div className={s.auth__nav}>
                <NavLink to="/login" activeClassName={s.auth__link_active} className={s.auth__link}>Sign in</NavLink>
                <NavLink to="/register" activeClassName={s.auth__link_active} className={s.auth__link}>Sign up</NavLink>
            </div>
            <div className={s.auth__content}>
                <Route path="/login" component={Loginform} />
                <Route path="/register" component={RegisterForm} />
            </div>
        </div>
    )
}

export default AuthComponent