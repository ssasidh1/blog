import React from 'react'
import styles from "./css/navbar.module.css"
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const nav = useNavigate()
  return (
    <div className={styles["box"]}>
        <div className={styles['items']}>
                <div className={styles['Projects']}>Projects</div>
                <div className={styles['Resume']} onClick={()=>nav('/resume')}>Resume</div>
                <div className={styles['About']}>About</div>
                <div className={styles['Contact']} onClick={()=>nav('/test')}>Contact</div>
        </div>
      
    </div>
  )
}

export default Navbar
