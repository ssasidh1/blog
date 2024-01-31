import styles from './css/test.module.css'
import { useState } from 'react';
import Navbar from './Navbar';
import ConstructionIcon from '@mui/icons-material/Construction';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from 'react-router-dom';
import Header2 from './Header2';
export default function Test(){
const nav = useNavigate()
const [mouseDownAt, setMouseDownAt] = useState(0.0);
const [prevPercentage, setPrevPercentage] = useState(0.0);
const [percentage, setPercentage] = useState(0.0);
const [nextPercent, setnextPercent] = useState(10);
const [trackStyle, setTrackStyle] = useState({
    transform: `translate(${nextPercent}%, -60%)`, 
    transition: 'all 1s'
  });
  const [imageStyle, setImageStyle] = useState({
    objectPosition: `${100 }% center`
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
        transform: `translate(${-10 +nextPercent}%,-60%)`
       ,  transition: 'all 1s'
       });
      
        setImageStyle({
          objectPosition: `${100 + nextPercent}% center`
        ,  duration: 1200, fill: "forwards" });
      
}


const handleUp = () =>{
    setMouseDownAt(0)
    setPrevPercentage(percentage);
}
const handleGrovify = ()=>{
    console.log("doubleclick")
    window.open('https://grovify.nidhiworks.com','_blank')
}
const handleJot = ()=>{
    console.log("doubleclick")
    window.open('https://jot.nidhiworks.com','_blank')
}

return(
    <div className={styles['body']}>
        <ConstructionIcon className={styles['under-construction']} sx={{color:'silver', height:'2rem'}}/>
        <div className={styles['caption']} >Under Construction</div>
        <Header2/>
        
        
    <div  id= {styles['image-track']} style={trackStyle} onMouseDown = {(e)=>handleDown(e)} onMouseMove={handleMove}
       onMouseUp={handleUp}  onTouchMove={(e)=>handleMove(e.touches[0])} onTouchEnd={(e)=>handleUp(e.touches[0])} onTouchStart={(e)=>handleDown(e.touches[0])}>
        <div className={`${styles.tap}`}>
            <KeyboardDoubleArrowRightIcon sx={{color:'silver' ,height:'5rem',width:'5rem'}}/>
            <div>Tap & slide to Navigate</div>
        </div>
        <div className={`${styles.image}`}>
        <img className={`${styles.common} ${styles.grovify}`} style = {imageStyle} src="./pl2.png" draggable="false"  />
        <div className={styles['tooltip']} onDoubleClick={handleGrovify}>
             <div>Double click to open</div>
             <div>Tap and slide to navigate</div> 
             <OpenInNewIcon sx={{color:"silver"}}  /></div>
        </div>
        <div className={`${styles.image}`}>
        <img className={`${styles.common} ${styles.ga}`} style = {imageStyle} src="./emb1.png" draggable="false" />
        <div className={styles['tooltip']} onDoubleClick={()=>nav("/projects/ga")}>
             <div>Double click to open</div>
             <div>Tap and slide to navigate</div>  <OpenInNewIcon sx={{color:"silver"}}  /></div>
        </div>
        <div className={`${styles.image}`}>
        <img className={`${styles.common} ${styles.notes}`} style = {imageStyle} src="./note-img2.png" draggable="false" />
        <div className={styles['tooltip']} onDoubleClick={handleJot}>
             <div>Double click to open</div> <div>Tap and slide to navigate</div> <OpenInNewIcon sx={{color:"silver"}}  /></div>
        </div>
        <div className={`${styles.image}`}>
        <img className={`${styles.common} ${styles.parking}`} style = {imageStyle} src="./spot.png" draggable="false" />
        <div className={styles['tooltip']} onDoubleClick={()=>nav("/projects/spotter")}>
             <div>Double click to open</div> <div>Tap and slide to navigate</div> <OpenInNewIcon sx={{color:"silver"}}  /></div>
        </div>
        <div className={`${styles.image}`}>
        <img className={`${styles.common} ${styles.rover}`} style = {imageStyle} src="./rover.png" draggable="false" />
        <div className={styles['tooltip']} onDoubleClick={()=>nav("/projects/agrimation")}>
             <div>Double click to open</div><div>Tap and slide to navigate</div>  <OpenInNewIcon sx={{color:"silver"}}  /></div>
        </div>
        
        {/* <div className={`${styles.image}`}>
        <img className={`${styles.common} ${styles.amazon}`} style = {imageStyle} src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        <div className={styles['tooltip']} onDoubleClick={handleGrovify}>
             <div>Double click to open</div> <div>Tap and slide to navigate</div> <OpenInNewIcon sx={{color:"silver"}}  /></div>
        </div>
        
        <div className={`${styles.image}`}>
        <img className={`${styles.common} ${styles.infosys}`} style = {imageStyle} src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
        <div className={styles['tooltip']} onDoubleClick={handleGrovify}>
             <div>Double click to open</div><div>Tap and slide to navigate</div>  <OpenInNewIcon sx={{color:"silver"}}  /></div>
        </div> */}
        
        <div className={`${styles.image}`}>
        <img className={`${styles.common} ${styles.dance}`} style = {imageStyle} src="./Soloimg.jpeg" draggable="false" /> 
        <div className={styles['tooltip']} onDoubleClick={()=>nav('/projects/dance')}>
             <div>Double click to open</div><div>Tap and slide to navigate</div> <OpenInNewIcon sx={{color:"silver"}}  /></div>
        </div>
        
    </div>
    </div>
)
}
