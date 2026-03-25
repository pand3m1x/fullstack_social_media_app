import { use } from "react";
import { useEffect } from "react";
import { postClient } from "../clients/api.js"

function Feed() {

  useEffect(() => {
    async function getData(){
      try {
      
        // get our posts from DB
      const response = await postClient.get('/')
      console.log(response.data)
      // save that in the component's state

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
    </div>
  )

}

export default Feed;