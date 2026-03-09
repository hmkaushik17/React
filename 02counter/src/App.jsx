import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [count, setCount]= useState (0)
  //let counter = 0

  const increaseValue = ()=>
  {
  //  counter++
   console.log(count)
   setCount(count+1)
  }

  const decreaseValue = ()=>
  {
    if(count>0){
      setCount(count-1)
    }
   
  }
  return (
    <>
     <h1>React</h1>
     <h2> Counter Value : {count}</h2>
     <button onClick = {increaseValue}>Increase Value</button> <br></br>
     
     <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
