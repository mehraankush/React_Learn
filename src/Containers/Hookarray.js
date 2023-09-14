import React, {useState} from 'react'

const Hookarray = () => {
    const [items, setItems] = useState([])

    const additems = () =>{
        setItems([...items,{
            id:items.length,
            value: Math.floor(Math.random() * 10) +1
        }])
    }
  return (
    <div>
        <button onClick={additems} >Add items</button>
        <ul>
            {
                items.map(item => <li key={item.id}>{item.value}</li>)
            }
        </ul>
    </div>
  )
}

export default Hookarray