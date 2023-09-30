import React from 'react'

const CloseFriends = ({user}) => {
  return (
    <div>
         <li className="sidebarFriend">
            <img src={`/assets/${user.profilePicture}`} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendImage">{user.username}</span>
          </li>
    </div>
  )
}

export default CloseFriends