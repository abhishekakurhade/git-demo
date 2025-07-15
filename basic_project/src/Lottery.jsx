import React, { useState } from 'react'
import"./Lottery.css"

function genTick(n){
    let arr = new Array(n);
    for(let i=0; i<n; i++){
        arr[i] = Math.floor(Math.random()*10)
    }
    return arr;
}

function sum(arr){
    return arr.reduce((sum, val) => sum + val, 0)
}

function Lottery() {
    let [ticket, setTicket] = useState(genTick(3));
    let iswinning = sum(ticket) === 15

    let buyTicket =() => {
        setTicket(genTick(3))
    }

  


  return (
    <div>
        <h1>Lottery</h1>
        <div className='ticket'>
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
            <br></br>
        </div>
        <br />
        <button onClick={buyTicket}> change lottery no. </button>
        <h3>{iswinning && "Congrutulation, you won "}</h3>
        </div>
  )
}

export default Lottery