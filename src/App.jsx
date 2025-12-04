import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() { 
  const tab = ["The only thing we have" , "It is never too late to be what you might have been","It is never too late to be what you might have been.","Strive not to be a success, but rather to be of value."] ; 
  const [value,usevalue] = useState(0) ;  
   
  function handleChange () { 
    usevalue (Math.floor (Math.random()*tab.length)) ; 
  }

return (  
  <>
  <h1> QUOTES </h1>    
  <button onClick= {handleChange} >Generate Quotes </button> 
  <p>{tab[value]}</p>
 </> 
)
  
}

export default App
