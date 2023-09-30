import React from 'react'
import "./Feed.css"
import Share from '../share/Share'
import Post from '../post/Post'

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feeedWrapper">
        <Share />
        <Post />
      </div>
    </div>
  )
}

export default Feed