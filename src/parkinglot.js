import React from 'react'
import styles from './css/parkinglot.module.css'
import style from './css/test.module.css'
import Header3 from './Header3'
function Parkinglot() {
  return (
    <div className={styles['parking-body']}>
    <Header3 />
    <div  className={styles['parking-main']}>
    <h2>Application UI</h2>
    <img src="./app.png" className={styles['app']}/>
      <h2>Motivation:</h2>
      <ul>
        <li>Finding a vacant parking spot in busy areas and prime time is tedious</li>
        <li>We wanted an app that notifies the user how many parking spaces are open at a location.</li>
        <li>This allows to eradicate the  hassle of driving through various lots and multi Storeyed building floors  back and forth</li>
        </ul>
        <h2>Architectural Flow:</h2>
        <img src="./arch.png" className={styles['arch']}/>
        <h2>Cloud Services:</h2>
        <p>S3 (Simple Storage Service), Rekognition, EC2, 6 Lambda Functions, 3 DynamoDB Tables, AWS Cognito for authentication and session management, API Gateway to provide REST and WebSocket Endpoints</p>
        <h2>Results:</h2>
        <img src="./results.png" className={styles['results']}/>
        <h2>Future improvements</h2>
        <ul>
            <li>Provide statistics for Each Parking Lot so that users can get an estimate of time after which they can get a parking spot using Linear Regression or Artificial Neural Networks </li>
            <li>Reciprocate the exact pattern of the parking space.</li>
            <li>SNS based notification system to keep user alerted when there is a vacant spot. </li>
        </ul>
        </div>
    </div>
  )
}

export default Parkinglot
