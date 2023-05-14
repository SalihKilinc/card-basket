import React, { useRef } from 'react'
import "./counter.css"
import CountUp, { useCountUp } from 'react-countup';

function Counter  () {
    const countUpRef = React.useRef([null])
    const { start, pauseResume, reset, update } = useCountUp({ref: countUpRef,duration: 2, start:0 , end:50})

  return (
    <div className='count'> 
    
    <div className="boxes">
        
        <div className="box box1"><CountUp end={100} duration={2} delay={2}/></div>
        <div className="box box2" ref={countUpRef}>0</div>
        <div className="box box3">{<CountUp end={500} duration={3} prefix='&#8378;' suffix='CHF' />}</div>
         </div>
    <div className="buttons">
        <button onClick={start}>Start </button>
        <button onClick={pauseResume}>pauseResume </button>
        <button onClick={reset}>reset </button>
        <button onClick={()=>update(120)}>update </button>
    </div>
    </div>
  )
}

export default Counter