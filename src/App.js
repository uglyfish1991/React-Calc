
//     #######################################
//     #                                     #
//     #      React Calculator Activity      #
//     #                                     #
//     #######################################

//========================================================================================================

// To create a working calculator within React

//========================================================================================================

import './App.css';
import React, { useState } from 'react';
import { evaluate } from 'mathjs';

//========================================================================================================



//========================================================================================================

// Main compontent - App
// Within top level, buttons, operate and num state are made. Also have two functions - one for taking note of which button has been pressed and one to evaluate the list

// state is immutable - we can't change it directly. Instead we can make copies of it and update it to the copies
//========================================================================================================

const App = () => {
  const buttons =
    [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '.','0', 
    ]

  const operate = [
    '+',"-","/","*",
  ]

  const [num, getNum] = useState([])  // default state is an empty list - num is how to refer to it, getNum is the function to change it

  const buttonHandler = (calcButton) => {
    let numArray = [...num]
    numArray.push(calcButton)
    getNum(numArray)
  }

  const clearHandler = (num) => {
    getNum([])
  }


  const equal = (num) => {
    console.log('doing equal') // to prove the function was being called
    let numJoin = [...num] // new list made from spreading num
    console.log(numJoin) // to prove numJoin was what I thought it was
    numJoin=numJoin.join("") // putting the list into a string, with no commas as seps
    console.log(numJoin) // to prove numJoin was what I thought it was
    let total = evaluate(numJoin) // new var, total which does the sum in the string numJoin is
    getNum(total) // change the state to total
  }

  return (
    <div className="App">
      <h1>A Calculator</h1>
      <div className="wrapper">
        <Display num={num} />
        <div className="buttonArea">
          <div>
          {buttons.map((calcButton, index) => {
            return (
              <button key={index} onClick={() => buttonHandler(calcButton)}>{calcButton}</button>
            )
          })}<button onClick={()=>equal(num)}>=</button>
        </div>
        <div className="opArea">
          {operate.map((calcButton, index) => {
            return (
              <button key={index} onClick={() => buttonHandler(calcButton)}>{calcButton}</button>
            )
          })}</div>
        </div>        
        <button className='clear' onClick={()=> clearHandler(num)}>Clear</button>
      </div>
    </div>
  )
}

const Display = (props) => {
  return (
    <div className="screen">
      {props.num}
    </div>
  )
}

export default App;
