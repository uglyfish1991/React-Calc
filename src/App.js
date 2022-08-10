import './App.css';
import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const App = () => {
  const buttons =
    [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+',"-","/","*",
    ]

  const [num, getNum] = useState([])

  const buttonHandler = (calcButton) => {
    let numArray = [...num]
    numArray.push(calcButton)
    getNum(numArray)

  }

  const equal = (num) => {
    console.log('doing equal')
    let numJoin = [...num]
    console.log(numJoin)
    numJoin=numJoin.join("")
    console.log(numJoin)
    let total = evaluate(numJoin)
    getNum(total)


  }

  return (
    <div className="App">
      <h1>A Calculator</h1>
      <div>
        <Display num={num} />
        <div className="buttonArea">
          {buttons.map((calcButton, index) => {
            return (
              <button key={index} onClick={() => buttonHandler(calcButton)}>{calcButton}</button>
            )
          })}
        </div>
        <button onClick={()=>equal(num)}>=</button>
        {/* <p><button onClick={()=> evaluate(num)}>=</button></p> */}
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
