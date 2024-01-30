import React from 'react'
import styles from './css/header4.module.css'
import { useNavigate } from 'react-router-dom'

function Header4() {
    const nav = useNavigate()
  return (
    <div className={styles['header']}>
        <div className={styles['nav-bar']}>
        <div className={styles['work']} onClick={()=>nav('/home')}>Work</div>
        <div className={styles['about']} onClick={()=>nav('/about')}>About</div>
       </div>
        <div className={styles['name']}>SRINIDHI  SASIDHARAN</div>
       
       </div>
  )
}

export default Header4
