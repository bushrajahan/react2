import { useEffect, useState } from "react"

import Fruit from "./Fruit"
export default function Fruits(){
  const [fruits,Setfruits] =useState([])

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => Setfruits(data))
  
  },[])
   return (
  
    <div>
      <h3>Fruits:{fruits.length}</h3>
      {
        fruits.map(fruit=> 
          
          <Fruit fruit ={fruit}></Fruit>
          )
      }
    </div>
   )  
}