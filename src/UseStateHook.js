import React, { useState } from 'react'

function UseStateHook() {
let [count,setCount]=useState(0)
function handleCount(){
  setCount(count=count+1)
}
  return (
    <div style={{textAlign:"center"}}  >UseStateHook
      <h1 >{count}</h1>
      <button  style={{alignContent:"center"}} onClick={handleCount}>Button</button>
    </div>
    
  )
}

export default UseStateHook