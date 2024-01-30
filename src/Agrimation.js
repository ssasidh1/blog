import React from 'react'
import styles from './css/agrimation.module.css'
import Header3 from './Header3'
function Agrimation() {
  return (
    <div className={styles['agri-main']}>
        <Header3 />
      <video src='./agrimation.mp4' width="1000" height="600" controls></video>
      <div className={styles['tech-main']}>
      <h3>Tech Stack</h3>
      <div> NI LabVIEW, Embedded C</div>
      </div>
      <div className={styles['tech-main']}>
      <h3>Objective </h3>      
      <ul>
        <li>Automates the process of farming and maintainence.</li>
        <li>Performs agricultural activities like sowing, ploughing, irrigating , harvesting etc.</li>
        <li>Continuous analysis of crop status using different sensors.</li>
        <li>Real-time weather analysis and advise provided to the farmer.</li>
      </ul>
      </div>
     
    </div>
  )
}

export default Agrimation
