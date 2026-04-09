import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from '../components/Card'

function App(){
  
  const [count, setCount] = useState(0)
  let myobj = {
    name:"himanshi",
    age:22
  }

  let arr =[1,2,3]

  return (
   <>
<h1 className='bg-green-400 text-black p-10 rounded w-xl mb-10'>Tailwind CSS </h1>
<Card username="Himanshi" text="Hiii"></Card>
<Card username="Sharma" ></Card>
   </>
  
  )
}

export default App

{/* <Card username="Himanshi" obj ={myobj} newarr = {arr}></Card>  */}