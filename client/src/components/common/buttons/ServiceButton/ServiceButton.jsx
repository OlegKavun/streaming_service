import React from 'react'
import { Link } from 'react-router-dom'
import s from '../buttons.module.scss'

const ServiceButton = ({text, icon, path}) => {
  return (
  <Link to={path} className={`${s.button} ${s.serviceBtn}`}>
      <p className={s.button__text}>{text}</p>
      <img className={s.button__icon} src={icon} alt="icon" />
  </Link>
)}

export default ServiceButton