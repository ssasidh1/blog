import React from 'react'
import styles from './css/header3.module.css'
import { useNavigate } from 'react-router-dom'
function Header3() {
    const nav = useNavigate()
  return (
    <div className={styles['header']}>
        <div className={styles['nav-bar']}>
        <div className={styles['work']} onClick={()=>nav('/test')}>Work</div>
        <div className={styles['about']}>About</div>
       </div>
        <div className={styles['name']}>SRINIDHI SASIDHARAN</div>
       
        
       </div>
  )
}

export default Header3
