import React from 'react'
import styles from './css/header.module.css'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
function Header() {
  const nav = useNavigate();
  return (
    <div className={styles['header-list']}>
      <div className={styles['fname']} onClick={()=>{nav("/home")}}>
            SRINIDHI 
            <div className={styles['lname']}>SASIDHARAN</div>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header
