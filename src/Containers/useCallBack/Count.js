import React from 'react'

const Count = ({text,count}) => {
    console.log("count called")
  return (
    <div>
        <h4>{text} - {count}</h4>
    </div>
  )
}

export default React.memo(Count)