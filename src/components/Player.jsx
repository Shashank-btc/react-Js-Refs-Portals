import { useRef, useState } from "react";
import TimerChallenge from "./TimerChallenge";

export default function Player() {

  const playerName = useRef();

  const [player, setPlayer] =useState("");
  // const [isClicked, setIsClicked] = useState(false);

  function onChange(event){
    // setIsClicked(false)`
    setPlayer(event.target.value)
  }

  function setName(){
    setPlayer(playerName.current.value)
    // setIsClicked(true)
  }
  return (
    <section id="player">
      <h2>Welcome {player ?player : 'unknown entity'} </h2>
      <p>
        {/* <input ref={player} type="text" onChange={onChange} value={player}/> */}
        <input ref={playerName} type="text" />

        <button onClick={setName}>Set Name</button>

      </p>
    </section>
  );
}
