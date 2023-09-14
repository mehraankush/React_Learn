import React, {useState, useEffect} from 'react'
import axios from 'axios'
const FetchData = () =>{
    // code for setching a single user data
    const [post, setPost] = useState({})  //empty object
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)

    useEffect(() => {
         axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then((response) => {console.log(response) 
                setPost(response.data)
                })
            .catch((error) => console.error(error))
            
    },[idFromButton])
    

    const handleClick = () =>{
       setIdFromButton(id)
    }
    return(
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={handleClick}>Fetch Data</button>
            <div key={id}> {post.title}</div>
        </div>
    )
}







// code for requesting 100 users at a time


// const FetchData = () => {
//     const [posts, setPosts] = useState([]) //empty array
    
//     useEffect(() => {
//        axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then((response) => {console.log(response) 
//             setPosts(response.data)
//         })
//         .catch((error) => console.error(error))
    
//     },[])
    
//   return (
//     <div>
//         <ul>{
//             posts.map((post) => <li key={post.id}> <strong>{post.id}</strong>   {post.title}</li>)
//         }
//         </ul>
//     </div>
//   )
// }

export default FetchData