import React,{useState, useEffect} from 'react'
import axios from 'axios'

const UsestateDataFetch = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [posts, setPosts] = useState({})

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
       .then((response) => (
          setLoading(false),
          setPosts(response.data),
          setError('')
       ))
        .catch(error => (
          setLoading(false),
          setPosts({}),
          setError("something went wrong")
        ))
    }, [])
    
  return (
    <div>
        {loading ? 'loading' : posts.title}
        {error ? 'error' :null}
    </div>
  )
}

export default UsestateDataFetch