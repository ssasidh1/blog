import React from 'react'
import styles from "./css/navbar.module.css"
function Navbar() {
  return (
    <div className={styles["box"]}>
        <div className={styles['items']}>
                <div className={styles['Projects']}>Projects</div>
                <div className={styles['Resume']}>Resume</div>
                <div className={styles['About']}>About</div>
                <div className={styles['Contact']}>Contact</div>
        </div>
      
    </div>
  )
}

export default Navbar
