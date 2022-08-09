import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


// const App = () => {
//   const [persons, setPersons] = useState([
//       { name: "Leon" },
//       { name: "Jordan" },
//   ]);
//   const handleClick = (value) => {
//       console.log(value);
//   };
//   return (
//       <div>
//           <Person name={persons[0].name} clickMe={handleClick} />
//           <Person name={persons[1].name} clickMe={handleClick} />
//       </div>
//   );
// };
// const Person = (props) => {
//   return <h1 onClick={() => props.clickMe({props.name})}>{props.name}</h1>;
// }

const App = () => {
  const buttons =
    [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-'
    ]

  let [num, getNum] = useState([])

  

  return (
    <div className="App">
      <h1>A Calculator</h1>
      <div>
        <Display num={num} />
        <div className="buttonArea">
          {buttons.map((calcButton, index) => {
            return (
              <button key={index} onClick={() => getNum(oldArray =>[...oldArray,calcButton])}>{calcButton}</button>
            )
          })}</div></div>
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
