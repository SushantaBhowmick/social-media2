import React from 'react'
import "./post.css"
import MoreVert from '@mui/icons-material/MoreVert'

const Post = (post) => {
    console.log(post)
    console.log(post.datew)
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUserName">Sushanta Bhowmick</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <div className="postText">{post.desc}</div>
                <img src="/assets/post/1.jpeg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" />
                    <img className='likeIcon' src="/assets/heart.png" alt="" />
                    <span className="postLikeCounter">{post.like} People Liked</span>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">{post.comment} comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post