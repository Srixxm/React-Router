import React from 'react'
import { useState } from 'react'
import './CalculatorComponent.css';

export default function CalculatorComponent() {

const [cal, setCal ] = useState("");
const [result, setResult]=useState("");

const ops =['/','*','-','+','.'];

const updateCal = value =>{
  if(ops.includes(value) && cal === '' )
  {
    return ;
  }
  if(ops.includes(value) && ops.includes(cal.slice(-1)))
  {
    return ;
  }

  setCal(cal + value);

  if (!ops.includes(value))
  {
    // eslint-disable-next-line
    setResult(eval(cal + value).toString());
  }


}

 /* const createDigits =() => {
    const digits =[];
    for (let i=1; i<10 ;i++)
    {
      digits.push(
        <button key={i}>{i}</button>
      )
    }
    return digits
  }*/

  const calculate = () => 
  {
    // eslint-disable-next-line
    setCal(eval(cal).toString());
  }

  const Delete =() =>
  {
    if(cal === '')
    {
      return ;
    }

    const value= cal.slice(0, -1);
    setCal(value);
  }
  return (
    <React.Fragment>
      <div className='APP'>
      <div className='calc'>
        <div className='display'>
          {result ? <span>( {result} )</span> : null}&nbsp; { cal || "0"}
        </div> 
        <div className='op'>
          <button onClick={() => updateCal('/')}>/</button>
          <button onClick={() => updateCal('*')}>*</button>
          <button onClick={() => updateCal('-')}>-</button>
          <button onClick={() => updateCal('+')}>+</button>
          
          <button onClick={ Delete }>DEL</button>
        </div>

        <div className="numbers">
          <button onClick={() => updateCal('1')}>1</button>
          <button onClick={() => updateCal('2')}>2</button>
          <button onClick={() => updateCal('3')}>3</button><br></br>
          <button onClick={() => updateCal('4')}>4</button>
          <button onClick={() => updateCal('5')}>5</button>
          <button onClick={() => updateCal('6')}>6</button><br></br>
          <button onClick={() => updateCal('7')}>7</button>
          <button onClick={() => updateCal('8')}>8</button>
          <button onClick={() => updateCal('9')}>9</button><br></br>
          
          <button onClick={() => updateCal('0')}>0</button>
          <button onClick={() => updateCal('.')}>.</button>
          <button onClick={calculate}>=</button>


        </div>
      </div>
      </div>
    </React.Fragment>
  )
}
