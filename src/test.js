import styles from './css/test.module.css'
import { useState } from 'react';
import Navbar from './Navbar';
import ConstructionIcon from '@mui/icons-material/Construction';
export default function Test(){
const [mouseDownAt, setMouseDownAt] = useState(0.0);
const [prevPercentage, setPrevPercentage] = useState(0.0);
const [percentage, setPercentage] = useState(0.0);
const [nextPercent, setnextPercent] = useState(10.0);
const [trackStyle, setTrackStyle] = useState({
    transform: `translate(${nextPercent}%, -50%)`, 
  });
  const [imageStyle, setImageStyle] = useState({
    objectPosition: `${100 + nextPercent}% center`
  ,  duration: 1200, fill: "forwards", 
  });
const handleDown = (e) =>{
    console.log("Im handleDown")
    setMouseDownAt(e.clientX);
    console.log("Im pressed",e.clientX,mouseDownAt);
}

const handleMove = e =>{
    console.log("Im moving",mouseDownAt,prevPercentage)
    if(mouseDownAt == 0) return;
    
    const mouseDelta = mouseDownAt - e.clientX,
    maxDelta = window.innerWidth/2
    console.log("type",typeof(mouseDownAt))
    const percentage = (mouseDelta /maxDelta) * -100,
    nextPercentPotential = prevPercentage + percentage
    setnextPercent(Math.max(Math.min(nextPercentPotential,10),-120))
    console.log("nextPoten",nextPercentPotential,nextPercent);
    setPercentage(nextPercent)
    setTrackStyle({
        transform: `translate(${nextPercent}%, -50%)`
       , 
       });
      
        setImageStyle({
          objectPosition: `${100 + nextPercent}% center`
        ,  duration: 1200, fill: "forwards" });
      
}


const handleUp = () =>{
    setMouseDownAt(0)
    setPrevPercentage(percentage);
}

return(
    <div className={styles['body']}>
        <ConstructionIcon className={styles['under-construction']} sx={{color:'silver', height:'2rem'}}/>
        <div className={styles['caption']} >Under Construction</div>
        <div className={styles['header']}>
        <div className={styles['nav-bar']}>
        <div className={styles['work']}>Work</div>
        <div className={styles['about']}>About</div>
       </div>
        <div className={styles['name']}>SRINIDHI SASIDHARAN</div>
       
       <div className={styles['punchline']}> Hover over to unfold the story behind each snap</div>
       </div>
    <div  id= {styles['image-track']} style={trackStyle} onClick = {(e)=>handleDown(e)} onMouseMove={handleMove}
       onMouseUp={handleUp} >
        <div className={`${styles.image}`}>
        <img className={`${styles.common} ${styles.grovify}`} style = {imageStyle} src="./pl2.png" draggable="false" />
        </div>
        
        <img className={`${styles.image} ${styles.ga}`} style = {imageStyle} src="./emb1.png" draggable="false" />
        <img className={`${styles.image} ${styles.notes}`} style = {imageStyle} src="./note-img2.png" draggable="false" />
        <img className={`${styles.image} ${styles.parking}`} style = {imageStyle} src="./reviews.png" draggable="false" />
        <img className={`${styles.image} ${styles.amazon}`} style = {imageStyle} src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        <img className={`${styles.image} ${styles.infosys}`} style = {imageStyle} src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
        <img className={`${styles.image} ${styles.rover}`} style = {imageStyle} src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
        <img className={`${styles.image} ${styles.dance}`} style = {imageStyle} src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" /> 
    </div>
    </div>
)
}
