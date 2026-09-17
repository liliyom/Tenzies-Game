import React from 'react'

const Die = (props) => {
    const styles = {
backgroundColor: props.isHeld ? "green" : "white"
    }
  return (
    <div>
      <button style={styles} 
     
       className="
    w-20 h-20
    border-2 border-[#062432]
    rounded-xl
    bg-white
    text-2xl font-bold
    text-[#062432]
    shadow-md
    hover:bg-[#062432]
    hover:text-white
    transition
  "
  onClick={()=> props.hold(props.id)}
  aria-pressed = {props.isHeld}
  aria-label= {`Die with value ${props.value}, ${props.isHeld ? "held": "not held"}`}
  >{props.value}</button>
    </div>
  )
}

export default Die
