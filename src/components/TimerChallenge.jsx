import { useRef, useState } from "react";
import ResultModle from "./ResultModle";

export default function TimerChallenge({title, targetTime}) {

    // const [timeExpried, setTimeExpried] = useState(false)
    // const [timerStarted, setTimeerStarted] = useState(false)

    let timer= useRef();
    let dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime *1000;


   if(timeRemaining <= 0){
    clearInterval(timer.current)
    dialog.current.showModal(); 
   } 

    function handleStart() {
    //  setTimeerStarted(true)
     timer.current = setInterval (() => { 
       setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10);
    }

    function hadleStop(){
        dialog.current.showModal(); 
        clearInterval(timer.current)
    }

    function handleRest(){
        setTimeRemaining(targetTime *1000)
    }
   
   return(
    <>
   <ResultModle ref={dialog} targetTime={targetTime}  remainingTime={timeRemaining} 
   onReset= {handleRest}/>
    <section className="challenge">
        <h2>{title}</h2>
        {/* {timeIsActive? <p>You Lost!</p>: ""} */}
        <p className="'challenge-time">
            {targetTime} second { targetTime > 1?'s' :"" }
        </p>
        <p>
            <button onClick={timeIsActive ? hadleStop : handleStart}>
            {timeIsActive ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timeIsActive ? 'active': undefined}>
            {timeIsActive ? ' Time is running.../ ' : 'Time inactive' }
        </p>
    </section>
    </>
    )
}