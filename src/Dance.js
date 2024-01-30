import React from 'react'
import styles from './css/dance.module.css'
import Header3 from './Header3'
function Dance() {
  return (
    <div className={styles['dance-main']}>
      <Header3 />
      <div className={styles['tiles']}>
        <img className={styles['image']} src="Soloimg.jpeg"/>
            <img className={styles['image']} src="solo3.JPG"/>
            <img className={styles['image']} src="solo4.jpeg"/>
            <video src='./tandav2.mp4' className={styles['image']}  controls></video>
            <video src='./dance4.mp4' className={styles['image']}  controls></video>
      </div>
    </div>
  )
}

export default Dance
