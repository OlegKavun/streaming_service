import React from 'react'
import s from './AuthComponent.module.scss'
import { NavLink } from 'react-router-dom'

const AuthComponent = (props) => {
    return (
        <div className={s.auth}>
            <h1 className={s.auth__title}>{props.form === 'login' ? 'LOGIN' : 'REGISTER'}</h1>
            <div className={s.auth__nav}>
                <NavLink to="/login" activeClassName={s.auth__link_active} className={s.auth__link}>Sign in</NavLink>
                <NavLink to="/register" activeClassName={s.auth__link_active} className={s.auth__link}>Sign up</NavLink>
            </div>
            <div className={s.auth__content}></div>
        </div>
    )
}

export default AuthComponent