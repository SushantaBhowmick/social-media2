import React from 'react'
import "./online.css"

const Online = ({user}) => {
  return (
    <div>  <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
      <img src={`/assets/${user.profilePicture}`} alt="" className="rightbarProfileImg" />
      <span className="rightbarOnline"></span>
    </div>
    <div className="rightbarUsername">{user.username}</div>
  </li>
  </div>
  )
}

export default Online