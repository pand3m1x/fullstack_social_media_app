function Post ({ post }) {

  const date = new Date(post.createdAt)

  return (
  <div>
    <h3>{post.title}</h3>
    <h4>author: {post.author.username}</h4>
    <div>{date.toLocaleDateString()} {date.toLocaleDateString()}</div>
    <p>{post.body}</p>
  </div>

  )
}

export default Post