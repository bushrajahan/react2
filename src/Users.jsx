import { useEffect, useState } from "react"

export default function USers(){
   
    const [users,setusers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data =>setusers(data)) 
    },[])
    return(
    <div>
      <h3>USers :{users.length}</h3>
    </div>
   )
      
    }    
  /***
   * first set a state
   * userEffect to fetch data
   * then pass the data to setusers
   */