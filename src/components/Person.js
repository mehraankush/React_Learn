import React from 'react'

function Person({person}) {
  const name = ["kajal", "priyaa", "Jenny", "kajal"]
  return (
    <div>
      
      {
        name.map((name, index) => <h3 key={index}>{index}{name}</h3>)
      }
    </div>
  )
}

export default Person;