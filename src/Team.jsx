import { useState } from "react"

export default function Team(){
  let [count,setcounter] = useState(11);
  const addStyle = {
     border:'1px solid blue',
     color:'pink',
     margin:'2px '
   }
    const handleAdd = () =>{
        count = count+1;
        setcounter(count);
    }
    const handleRemove =() =>{
      setcounter(count - 1);
    }
      return (
        <div style={addStyle }>
           <h3>Team:{count+1}</h3>
       
           <button onClick={handleAdd}>Add</button>
           <button onClick={handleRemove}>Remove</button>
        
        </div>
      )
}