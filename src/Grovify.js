import React from 'react'
import styles from './css/home.module.css'
import Header from './Header'
import Iframe from 'react-iframe';
import style from './css/grovify-iframe.module.css'
function Grovify() {
  return (
    <main className={styles.main}>
    <div className={styles['header']}>
    <Header/>
    </div>
    <div className={style['box-gr']}>
    <Iframe url="https://grovify.nidhiworks.com" className={style['iframes-grovify']} />
    </div>
    </main>
  )
}

export default Grovify
