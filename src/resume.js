import React from 'react'
import styles from './css/resume.module.css'
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
function Resume() {
  return (
    <div className={styles['body']}>
      <div className={styles['sheet']}>
      <div className={styles['contact']}>
        <EmailIcon sx={{color:'black'}}/>
        <a className={styles['mail']} >srinidhisasidharan99@gmail.com</a>
        <SmartphoneIcon className={styles['phoneIcon']} sx={{color:'black', height:'1.25rem'}}/>
        <a className={styles['phone']}>+1(607)235-8259</a>
        </div >
        <div  className={styles['links']}>
            <LinkedInIcon className={styles['icon']} sx={{color:'black'}}/>
            <a className={styles['linkedin']} href='https://www.linkedin.com/in/srinidhi-sasidharan'>LinkedIn</a>
            <GitHubIcon  className={styles['icon']} sx={{color:'black'}}/>
            <a className={styles['github']} href='https://github.com/ssasidh1'>Github</a>
            <LanguageIcon className={styles['icon']} sx={{color:'black'}}/>
            <a className={styles['portfolio']} href='https://voyages.nidhiworks.com' >Portfolio</a>
        </div>
      </div>
    </div>
  )
}

export default Resume
