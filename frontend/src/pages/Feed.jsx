import { useState } from "react";
import { useEffect } from "react";
import { postClient } from "../clients/api.js"
import Post from "../components/Post"

function Feed() {

    const [posts, setPosts] = useState([])

  useEffect(() => {

    async function getData(){

      try {
      
        // get our posts from DB
      const {data} = await postClient.get('/')
      console.log(response.data)
      
      // save that in the component's state
      setPosts(data)

      } catch (err) {

        console.log(err.response.data)

      }
    }
    getData()
  }, 
  [])

  return(
    <div>
      <h1>Feed</h1>
      {posts.map(post => <Post post={post} />)}
    </div>
  )

}

export default Feed;