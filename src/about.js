import React from 'react'
import styles from './css/about.module.css'
import Header4 from './header4'

function About() {
  return (
    <div className={styles['about-main']}>
        <Header4/>
        <div className={styles['content']}>
      <h1>
        I believe that every opportunity is a stepping stone, a chance not just to discover but to redefine my limits.
      </h1>
      <div className={styles['para']}>
        I am a spirited individual who gets thrilled over new opportunity. 
        </div>
        <div className={styles['para2']}>
        Everyday I am fascinated by how little things incredibly improve me.<br/> 
        Whether engrossing myself in intricate projects or projects that awaken my creative soul, I find joy in the simplicity of life.<br/> <br/> <br/> 
        From dancing and singing to indulging in the charm of cartoons, my interests are varied and I am still exploring.
      </div>
      <br/> 
      <br/> 
      <div className={styles['experience']}>
        <div className={styles['title']}>Working Experience</div>
        <div>Specialist Programmer - Infosys (2020-2022)</div>
        <div>Student Engagement Program - National Instruments (Dec 2019- Mar 2020) ...</div>
      </div>
      <br/> 
      <br/> 
      <div className={styles['para2']}>
      To know more connect with me on<br/>
        <a href = "https://www.linkedin.com/in/srinidhi-sasidharan">Linked</a> or srinidhisasidharan99@gmail.com. <br/>I love to chat.
      </div>
      </div>
    </div>
  )
}

export default About
