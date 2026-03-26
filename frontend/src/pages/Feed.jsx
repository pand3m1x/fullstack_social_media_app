import { useState } from "react";
import { useEffect } from "react";
import { postClient } from "../clients/api.js"
import Post from "../components/Post"

function Feed() {

    const [posts, setPosts] = useState([])

    const [ title,setTitle ] = useState('')
    const [ body,setBody ] = useState('')
    const [ user,setUser ] = useState('')

  useEffect(() => {

    async function getData(){

      try {
      
        // get our posts from DB
      const { data } = await postClient.get('/')
      console.log(data)

      // save that in the component's state
      setPosts(data);

      } catch (err) {

        console.log(err.response.data)

      }
    }
    getData()
  }, [])

  const handleSubmit = async (e) => {

    e.preventDefault()
    
    try{

    // make a POST request
    const { data } = await postClient.post('/', { title,body })
    console.log(data)
    // add the new post to our State
    setPosts([ data, ...posts ])

    // reset the form
    setTitle('')
    setBody('')

    } catch(err) {

    console.log(err)

    }
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Make a post!</h2>
        <label htmlFor="title">Title:</label>
        <input type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required />
        <br/>
        <label htmlFor="body">Body:</label>
        <input type="text"
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)} 
        required />
        <br/><button>Submit</button>
      </form>
      <h1>Feed</h1>
      {posts.map(post => <Post key={post._id} post={post} />)}
    </div>
  )

}

export default Feed;

// amywhere .map is is where the key should be (top level component)