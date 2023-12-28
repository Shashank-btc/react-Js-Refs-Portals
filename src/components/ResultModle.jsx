import {forwardRef} from 'react'; 

const ResultModle = forwardRef(function ResultModle({ targetTime, remainingTime, onReset }, ref){


    console.log(remainingTime + "remainingTime")
    const userLost= remainingTime <= 0;

    const fomatterdRemainingTime = (remainingTime / 1000).toFixed(2);

    return (
        <dialog ref={ref} className="result-modal" >
            { userLost && <h2> You lost</h2> }

            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the with{' '} <strong>{fomatterdRemainingTime} seconds left</strong> </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
})

export default ResultModle;