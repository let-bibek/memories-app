import React from 'react'
import Post from './Post/Post'
import makeStyles from './styles'

function Posts() {
  const classes = makeStyles();
  return (
    <>
      <div>Posts</div>
      <Post />
      <Post />
    </>
  )
}

export default Posts