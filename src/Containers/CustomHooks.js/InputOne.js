import React from 'react'
import InputCustomHook from './InputCustomHook'

const InputOne = () => {
   const [firstName, bindFirstName, ResetFirstName] = InputCustomHook('')
   const [lastName, bindLastName, ResetLastName] = InputCustomHook('')

    const SubmitHandler = (e) => {
       e.preventDefault()
       alert(`hello ${firstName} ${lastName}`) 
       ResetFirstName()
       ResetLastName()
    }
  return (
    <div>InputOne
        <form onSubmit={SubmitHandler}>
          <input type='text' 
              {...bindFirstName}
            />
          <input type='text' 
             {...bindLastName}
            />
            <button >Submit</button>
        </form>
    </div>
  )
}

export default InputOne