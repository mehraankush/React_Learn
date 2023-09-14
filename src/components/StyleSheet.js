import React from 'react'
import './Stylesheet.css';
import style from './Style.module.css'

const inline = {
    color: 'blue',
}
const styleSheet = (props) => {
    const hello = props.primary ? 'primary' :" ";
  return (
    <div>
         
        {/* <h1 className={hello}>Stylesheet</h1> */}
        <h1 style={inline}>Stylesheet</h1>
        <h1 className={style.error}>Error</h1>
        <h1 className='primary'>Error</h1>
    </div>
  )
}

export default styleSheet