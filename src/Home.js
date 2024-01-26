
import styles from './css/home.module.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
export default function Home() {
const nav = useNavigate();
const navGrovify= ()=>{
  nav('./grovify')
}
  return (
    <main className={styles.main}>
      <div className={styles['header']}>
      <Header/>
      </div>
      <div className={styles.mainCard}>
      
      <div className={styles['journey']}>My Journey so far...</div>
      <div className={styles['body']} >
            
            <a className={`${styles.grovify} ${styles.common} `} href="/#/projects/grovify" target="_blank">
              
              <img className={styles['grovify-img']}src="./Grovify.png"/>
               <img className={styles['grovify-img1']}src="./Grovify-2.png"/>
              <img className={styles['grovify-img2']}src="./Grovify3.png"/>
              <img className={styles['grovify-img4']}src="./Grovify4.png"/>
              <img className={styles['grovify-img5']}src="./Grovify5.png"/>
              <img className={styles['grovify-img6']}src="./login.png"/>
              <div className={styles['grovify-app']}>Grovify
              <div className={styles['sub']}> - music streaming app</div>
              </div>
            </a>
            <a className={`${styles.ga} ${styles.common}`} href="/#/projects/ga" >
            <img className={styles['rfsuny']}src="./suny-rf.png"/>
            <img className={styles['BLe']}src="./ble.png"/>
            <img className={styles['adc']}src="./adc.png"/>
            <img className={styles['ecg']}src="./ecg2.png"/>
            <img className={styles['TI']}src="./TI.png"/>
            <div className={styles['grovify-app']}>Grad Research Assistant
              <div className={styles['sub']}> </div>
              </div>
            </a>

            <a className={`${styles.noteapp} ${styles.common}`} href="/#/projects/jot" target="_blank">
            <img className={styles['note1']}src="./note3.png"/>
            <img className={styles['note2']}src="./note2.png"/>
            
            <img className={styles['note3']}src="./note1.png"/>
            <img className={styles['note4']}src="./note4.png"/>
            <img className={styles['note5']}src="./note5.png"/>
            <div className={styles['grovify-app']}>Jot
              <div className={styles['sub']}> - note taking app</div>
            </div>
            </a>
           
            <a disabled={true} className={`${styles.parkinglot} ${styles.common}`}  href="/#/projects/spotter" >
            <img className={styles['parking1']}src="./parking1.png"/>
             <img className={styles['parking2']}src="./aws.png"/>
            <img className={styles['parking3']}src="./parking3.png"/>
            <img className={styles['parking4']}src="./aws2.png"/>
            <div className={styles['grovify-app']}>Spotter
            <div className={styles['sub']}> - parking assistant app</div>
            </div>
            </a>
           
            <div className={`${styles.amazonReviews} ${styles.common}`}>
              Amazon Review- Customer Satisfaction Analysis (yet to add)
            </div>
            
            <div className={`${styles.dance} ${styles.common}`}>
              Dance achievements (yet to add)
            </div>
            <div className={`${styles.infosys} ${styles.common}`}>
              My role at Infosys (yet to add)
            </div>
            <div className={`${styles.rover} ${styles.common}`}>
              Land Rover- Agricultural Aid (yet to add)
            </div>
            <div className={`${styles.ni} ${styles.common}`}>
              My role in National Instruments (yet to add)
            </div>
            <div className={`${styles.redpal} ${styles.common}`}>
              Redpal - elderly monitoring wristwatch (yet to add)
            </div>
      </div>
      </div>
    </main>
  )
}