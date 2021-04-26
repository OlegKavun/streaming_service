import React from 'react'
import s from './buttons.module.scss'

const CommonButton = ({text}) => {
    return (
      <button className={`${s.button} ${s.commonBtn}`} type="submit">{text}</button>
    )
}

export default CommonButton