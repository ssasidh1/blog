import React from 'react'
import styles from './css/header.module.css'
import Navbar from './Navbar'
function Header() {
  return (
    <div className={styles['header-list']}>
      <div className={styles['fname']}>
            SRINIDHI 
            <div className={styles['lname']}>SASIDHARAN</div>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header
