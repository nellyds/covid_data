import React, { useState, useEffect} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
function Number(props){
    const [animateActive, setActive] = useState(true)
    const fieldName = props.field
    const fieldNumber = props.number
    useEffect(() =>{
        animateCount(fieldName,fieldNumber -100,fieldNumber, 1000)
    }, [fieldNumber, fieldName])

    function animateCount(id, start, end, duration){
            if (start === end || !animateActive) return;
    let range = end - start;
    let current = start;
    let increment = end > start? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    if (current === end) {
        clearInterval(timer);
    }
    }, stepTime);
    }
    function endAnimate(){
        setActive(false)
    } 
    return(
        <div onClick={endAnimate}>
             <ScrollAnimation animateIn="fadeInRight">
  
                <p class="number"><span id={props.field} >0</span></p>

            </ScrollAnimation>
        </div>
    )
}

export default Number