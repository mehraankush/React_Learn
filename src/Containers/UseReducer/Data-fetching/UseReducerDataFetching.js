import React,{useReducer, useEffect} from 'react'
import axios from 'axios'

const InitialValue = {
    loading:true,
    Error:'',
    post:{}
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading:false,
                Error:'',
                post:action.payload
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                Error: 'SomethngWent Wrong',
                post:{}
            }
        default:
            return state
    }
}

const UseReducerDataFetching = () => {
    const [state, dispatch] = useReducer(reducer, InitialValue)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/69')
         .then((response) => (
            dispatch({type:'FETCH_SUCCESS',payload: response.data})
         ))
          .catch(error => (
            dispatch({type:'FETCH_SUCCESS'})
          ))
      }, [])
    
  return (
    <div>
        {state.loading?'Loading':state.post.title}
        {state.error ? state.error:null}
    </div>
  )
}

export default UseReducerDataFetching
