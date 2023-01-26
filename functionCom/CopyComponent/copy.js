import React from 'react'
import { useState} from 'react'

function Copy() {
    const [istext, setIsText] = useState('');

    const handleCoopyText=(event)=>{
        const textHold = event.target.value;
        setIsText(textHold)
    }

    const handleCopySelection =()=>{
        navigator.clipboard.writeText(istext)
    }
  return (
    <>
    <input onChange={(event)=>handleCoopyText(event)}/>
    <button onClick={handleCopySelection}>Copy</button>
    </>
  )
}

export default Copy