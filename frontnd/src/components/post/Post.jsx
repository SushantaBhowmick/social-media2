import React, { useState } from 'react'
import "./post.css"
import MoreVert from '@mui/icons-material/MoreVert'
import {Users} from '../../dummyData'


const Post = ({post}) => {
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false);

    const likeHandler=()=>{
        setLike(isLiked?like-1:like+1)
        setIsLiked(!isLiked)
       
    }
   
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={`/assets/${Users.filter(u=>u.id === post.userId)[0].profilePicture}`} alt="" className="postProfileImg" />
                    <span className="postUserName">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <div className="postText">{post?.desc}</div>
                <img src={`/assets/${post.photo}`} alt={post.photo} className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" onClick={likeHandler} />
                    <img className='likeIcon' src="/assets/heart.png" alt=""  onClick={likeHandler} />
                    <span className="postLikeCounter">{like} People Liked</span>
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