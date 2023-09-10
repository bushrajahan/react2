import { useState } from "react"

export default function Counter(){
  const [count,setcount]= useState(50);
  const handleAdd =() =>{
    const newCount = count + 1;
    setcount(newCount)
  }
  const handleRemove = () =>{
    const newCount = count - 1;
    setcount(newCount);
  }
  return(
     <div style={{border:'2px solid red'}}>
      <h3>Counter : {count}</h3>
       <button onClick={handleAdd}>Add</button>
       <button onClick={handleRemove}>remove</button>
     </div>

   )
}