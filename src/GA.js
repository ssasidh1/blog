
import React from 'react'
import styles from './css/home.module.css'
import Header from './Header'
function GA() {
  return (
    <main className={styles.main}>
    <div className={styles['header']}>
    <Header/>
    </div>
    <div>
      <h2>Role:</h2>
      <p>Research Assistant under Dr. Kanad Ghose</p>
        <h2>Tools: </h2>
        <p>Code Composer Studio, Sensor Controller Studio, TI- Packet Sniffer, TI- Btool, TI- Flash programmer,Android Studio etc.</p>
        <h2>Hardwares:</h2>
        <p>CC2640, CC2650, CC2640R2F, BLE dongle, SaBLE-x-R2, SmartRF06EB, Oscilloscopes etc.</p>
        <h2>Language:  </h2>
        <p>Embedded C, Java, Python</p>
        <h2>Brief:</h2>
        <ul>
          <li>Experimented various built versions and their compatibility with the current SDK and stacks.</li>
          <li>Established bluetooth connection and played with various characteristics.</li>
          <li>Understood the significance of software and hardware interface attributes to establish seemless connection.</li>
          <li>Multithreaded the tasks such a way that it transmits data at an expected frequency.</li>
          <li>Configured sampling rate of Analog to Digital Convertor such that the resultant signal is not aliased. </li>
          <li>Developed python host application to recieve the data via bluetooth connection and visualize the data in desired structure.</li>
          <li>Created Android Application for data visualization via bluetooth medium.</li>
        </ul>

    </div>
    </main>
  )
}

export default GA
