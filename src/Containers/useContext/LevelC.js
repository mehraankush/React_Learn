import React,{useContext} from 'react'
import { UserName, UserIntention } from '../../App';
const LevelC = () => {
 const userName =  useContext(UserName)
 const userIntention =  useContext(UserIntention)
  return (
    <div> 
        <h1>Name : {userName} , Inention : {userIntention}</h1>
        Nesting Level C
    </div>
  )
}

export default LevelC