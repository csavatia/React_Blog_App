import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

const IndexPage = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const response = fetch('http://localhost:4000/post').then((response) => {
      response.json().then((posts) => {
        setPosts(posts)
      })
    })
  }, [])
  return (
    <>
      <div>
        {posts.length > 0 &&
          posts.map((post) => {
            return <Post {...post} />
          })}
      </div>
    </>
  )
}

export default IndexPage
