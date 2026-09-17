import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const Box = () => {
  const [diceState, setDice] = React.useState(()=> generateAllNewDice());
const [time, setTime] = React.useState(0);
 const gameWon =  diceState.every(die => die.isHeld ) &&
   (diceState.every(die => die.value === diceState[0].value)) 
const newGameButtonRef = React.useRef(null);
React.useEffect(() => {
  if (gameWon) {
    newGameButtonRef.current.focus();
  }
}, [gameWon]);
React.useEffect(() => {
  if (gameWon) return;

  const timer = setInterval(() => {
    setTime(oldTime => oldTime + 1);
  }, 1000);

  return () => clearInterval(timer);
}, [gameWon]);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

 

  function rollDice() {
    if(!gameWon){
 setDice((oldDie) =>
      oldDie.map((die) =>
        die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
    }
    else{
      setDice(generateAllNewDice())
      setTime(0)
    }
   
  }

  function hold(id) {
    setDice((oldDie) =>
      oldDie.map((die) =>
        die.id === id
          ? { ...die, isHeld: !die.isHeld }
          : die
      )
    );
  }

  const diceElements = diceState.map((diecObj) => (
    <Die
      key={diecObj.id}
      value={diecObj.value}
      isHeld={diecObj.isHeld}
      hold={hold}
      id={diecObj.id}
    />
  ));

return (
  <>
    {gameWon && <Confetti />}

    <div aria-live="polite" className="sr-only">
      {gameWon && (
        <p>Congrats! You won the game! Let's start another one.</p>
      )}
    </div>

    <div className="w-full max-w-[520px] bg-[#062432] p-5 sm:p-7 flex items-center justify-center rounded-2xl shadow-2xl">

      <div className="w-full bg-gray-100 rounded-xl p-6 grid grid-cols-5 gap-x-4 gap-y-6 place-items-center">

        {/* Timer */}
        <h2 className="col-span-5 text-2xl font-bold text-[#062432]">
          Time: {time}s
        </h2>

        {/* Dice */}
        {diceElements}

        {/* Button */}
        <button
          ref={newGameButtonRef}
          className="
            col-span-5
            w-60
            px-6 py-3
            rounded-xl
            border-2 border-[#062432]
            bg-white
            text-2xl font-bold
            text-[#062432]
            shadow-md
            hover:bg-[#062432]
            hover:text-white
            transition
          "
          onClick={rollDice}
        >
          {gameWon ? "New Game" : "Roll"}
        </button>

      </div>
    </div>
  </>
);
  

};

export default Box;
