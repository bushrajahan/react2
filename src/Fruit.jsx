import './Friends.css';

export default function Fruit(fruit){
  console.log(fruit)
  const {name,email} =fruit.fruit;
  
  return(
  <div className="box">
      <h3>Name:{name}</h3>
       <p>Fruit:{email}</p>
     </div>
  )
}