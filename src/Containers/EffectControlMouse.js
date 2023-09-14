import React, { useState , useEffect} from 'react'
import EffectMouse from './EffectMouse'

const EffectControlMouse = () => {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle Mouse Movement</button>
        {display && <EffectMouse/>}
    </div>
  )
}

export default EffectControlMouse