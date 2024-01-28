import styles from './css/test.module.css'
import { useState } from 'react';
export default function Test(){
const [mouseDownAt, setMouseDownAt] = useState(0.0);
const [prevPercentage, setPrevPercentage] = useState(0.0);
const [percentage, setPercentage] = useState(0.0);
const [nextPercent, setnextPercent] = useState(0.0);
const [trackStyle, setTrackStyle] = useState({
    transform: `translate(${nextPercent}%, -50%)`,
    duration: 1000, fill: "forwards" 
  });
  const [imageStyle, setImageStyle] = useState({
    objectPosition: `${100 + nextPercent}% center`
  ,  duration: 1200, fill: "forwards" 
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
    setnextPercent(Math.max(Math.min(nextPercentPotential,0),-100))
    console.log("nextPoten",nextPercentPotential,nextPercent);
    setPercentage(nextPercent)
    setTrackStyle({
        transform: `translate(${nextPercent}%, -50%)`
      ,  duration: 1000, fill: "forwards" });
      
        setImageStyle({
          objectPosition: `${100 + nextPercent}% center`
        ,  duration: 100, fill: "forwards" });
      
}


const handleUp = () =>{
    // setMouseDownAt(0)
    setPrevPercentage(percentage);
}

return(
    <div className={styles['body']}>
    <div  id= {styles['image-track']} style={trackStyle} onMouseDown = {(e)=>handleDown(e)} onMouseMove={handleMove}
       onMouseUp={handleUp} >
       
    
         <img className={styles["image"]} style = {imageStyle} src="./grovify.png" draggable="false" />
        <img className={styles["image"]} style = {imageStyle} src="./ecg2.png" draggable="false" />
        <img className={styles["image"]} style = {imageStyle} src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        <img className={styles["image"]} style = {imageStyle} src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        <img className={styles["image"]} style = {imageStyle} src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        <img className={styles["image"]} style = {imageStyle} src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
        <img className={styles["image"]} style = {imageStyle} src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
        <img className={styles["image"]} style = {imageStyle} src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" /> 
    </div>
    </div>
)
}
