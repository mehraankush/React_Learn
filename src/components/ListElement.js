import React from 'react'
import Person from './Person';

const ListElement = () => {

    const persons = [
    {
        id :1,
        name:"jyoti",
        age:18
    },
    {
        id :1,
        name:"Kartik",
        age:19
    },
    {
        id :1,
        name:"Manas",
        age:17
    }
]
   const NameList = persons.map(person => <Person person={person}/>)
  return <div>{NameList}</div>
}

export default ListElement