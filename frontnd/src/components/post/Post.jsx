import React from 'react'
import "./post.css"
const Post = () => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assest/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUserName">Sushanta Bhowmick</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    
                </div>
            </div>
            <div className="postCenter"></div>
            <div className="postRight"></div>
        </div>
    </div>
  )
}

export default Post