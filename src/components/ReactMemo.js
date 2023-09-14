import React from 'react'

const ReactMemo = ({name}) => {
    console.log("ReactMemo")
  return (
    <div>ReactMemo {name}</div>
  )
}

export default React.memo(ReactMemo)