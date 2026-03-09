import React from 'react'
import { StrictMode } from 'react'
import {jsx as _jsx } from "react/jsx-runtime.js"
import { createRoot } from 'react-dom/client'


import App from './App.jsx'

function MyApp()
{
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement= {
//     type : 'a',
//     props : {
//         'href':"https://google.com",
//         "target": "_blank"
//     },
//     children: 'click me to visit google'
// }

const anotherElement=  (
  <a href="https//:google.com" target='_blank'>Visit Google</a>
)

const anotherUser= "Kaushik"

const reactElement = React.createElement(
  'a', // type of tag 
  {href:"https://google.com" , target:"_blank"}, // prooperties Attributes
  'click me to visit the Google!    ',  //text children
  anotherUser //Evaluated Expression
)
createRoot(document.getElementById('root'))
.render(
  reactElement
  // anotherElement
  // ReactElement

 
    // <App />

     /* <MyApp /> */
    /* MyApp() //Not optimized way  its not work in strict mode
    */
  
)
