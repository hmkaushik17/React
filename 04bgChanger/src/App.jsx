import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      
    <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 gap-4 px-4">
    
    <div className="flex flex-wrap justify-center  shadow-lg bg-white px-3 py-3 rounded-3xl">
    <button onClick={()=>setColor('red')}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
    </div>

      <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3 rounded-3xl">
      <button  onClick={()=>setColor('green')}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
    </div>
      <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3 rounded-3xl"><button onClick={()=>setColor('blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
    </div>
      <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3 rounded-3xl"><button onClick={()=>setColor('orange')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
    </div>
      <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3 rounded-3xl">
      <button onClick={()=>setColor('purple')}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Purple"}}>Purple</button>
    </div>
      <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3 rounded-3xl">
      <button onClick={()=>setColor('olive')}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Olive"}}>Olive</button>
    </div>

     </div>
      </div>
    </>
  )
}

export default App
