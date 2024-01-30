import React from 'react'
import styles from './css/test.module.css'
import { useNavigate } from 'react-router-dom'
function Header2() {
    const nav = useNavigate()
  return (
    <div className={styles['header']}>
        <div className={styles['nav-bar']}>
        <div className={styles['work']} onClick={()=>nav('/home')}>Work</div>
        <div className={styles['about']}>About</div>
       </div>
        <div className={styles['name']}>SRINIDHI SASIDHARAN</div>
       
        <div className={styles['punchline']}>Tap and hover over to unfold the story behind each snap</div>
       </div>
  )
}

export default Header2
