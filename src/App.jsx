
import './App.css'
import Counter from './Counter';
import Team from './Team';
import USers from './Users';

import Fruits from './Fruits';
function App() {
  function handleClick(){
    alert('Hello World');
  }
  const handleClick2 =()=>{
    alert('hello world');
  }
  const addToFive =(value)=>{
      alert(value +2);
  }
  return (
    <>
      
      <h1> React Core Concepts 2</h1>
      <Fruits></Fruits>
      <USers></USers>
      <Team></Team>
       <Counter></Counter>     
      <button onClick={handleClick}>Click Me</button>     
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('Hello World')}}>third</button>
      <button onClick={()=>addToFive(3)}>AddToFive</button>
    </>
  )
}

export default App
