import { useState,useCallback,useEffect,useRef, use} from 'react'


function App() {
  const [length, setLength]= useState(8)
  const [numberAllowed, setNumber]= useState(false)
  const [character, setCharacter]= useState(false)
  const [password,setPassword]= useState("")

  const passRef= useRef("null")
  
  const passWordGenerator = useCallback(()=>
  {
    let pass=''
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(character) str += "@!#$^&*(){}[]-_`~"

    for(let i=1; i<=length; i++)
    {
      let charIndex= Math.floor(Math.random()*str.length+1)
      pass+= str.charAt(charIndex)
    }
    setPassword(pass)
  },[length,numberAllowed,character, setPassword])

  const copyPassword = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },[password]) 

  useEffect(()=>{
    passWordGenerator()
  },[length,numberAllowed,character,passWordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700'>
     <h1 className='text-4xl text-white text-center py-4'>Password Generator</h1>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4 py-5 gap-2'>
        <input 
          type="text"
          value={password}
          placeholder='Password'
          className='outline-none w-full py-1 px-3 bg-white rounded text-black'
          readOnly
          ref={passRef}>
        </input>

     
      <button 
      onClick ={copyPassword}
      className='bg-blue-700 px-3 py-0.5 shrink-0 text-white rounded cursor-pointer hover:bg-green-400'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2 pb-3 '>
      
      <div className='flex items-center gap-x-1'>
        <input
          type="range"
          min={8}
          max={100}
          value={length}
          className='text-white cursor-pointer'
          onChange={(e)=> {setLength(e.target.value)}}>
        </input>
        <label>Length:{length}</label>

      </div>

      <div className='flex items-cneter gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{setNumber((prev)=> !prev)}}
          className='cursor-pointer'>
        </input>
        <label>Number</label>
      </div>

       

      <div className='flex items-cneter gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={character}
          id="charrInput"
          onChange={()=>{setCharacter((prev)=> !prev)}} 
          className='cursor-pointer'>
        </input>
        <label>Character</label>
      </div>

       

       
      </div>
     </div>
    </>
  )
}

export default App
