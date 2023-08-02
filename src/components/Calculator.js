import './../calculator.css';
import { useState } from 'react';
import './../calculator.css';

function Calculator(){
  const[input,setInput]=useState('');
  const [result , setResult]=useState('');
  let back='<-';
  function handelInput(value){
    setInput(input + value);
  }
  function clear(){
    setInput('');
    setResult('');
  }
  function backspace(){
    let lastchar=input.charAt(input.length-1);
    setInput(input.slice(0,-1));
  }
  return(
  <div className='button'>
    <div className='container'>
      <label for='input'>Input</label><br/>
      <input type='text' id='input' value={input}/><br></br><hr></hr>
      <label for='result'>Result</label><br/>
      <input type='text' id='result' value={result}/>
      <br></br><hr></hr>
      <div className='buttons'>
      <button onClick={()=>handelInput('1')}>1</button>
      <button onClick={()=>handelInput('2')}>2</button>
      <button onClick={()=>handelInput('3')}>3</button>
      <button onClick={()=>handelInput('+')}>+</button>
      <br></br>
      <button onClick={()=>handelInput('4')}>4</button>
      <button onClick={()=>handelInput('5')}>5</button>
      <button onClick={()=>handelInput('5')}>6</button>
      <button onClick={()=>handelInput('-')}>-</button>

      <br></br>
      <button onClick={()=>handelInput('7')}>7</button>
      <button onClick={()=>handelInput('8')}>8</button>
      <button onClick={()=>handelInput('9')}>9</button>
      <button onClick={()=>handelInput('*')}>*</button>
      <br></br>
      <button onClick={()=>clear('')}>AC</button>
      <button onClick={()=>setResult(eval(input))}>=</button>
      <button onClick={()=>handelInput('/')}>/</button>
      <button onClick={()=>backspace()}>{back}</button>
    </div>
    </div>

  </div>
  );
}
export default Calculator;