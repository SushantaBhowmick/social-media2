import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
const Profile = () => {
  return (
    <div>
        <Topbar />     
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg"  />
            <img src="/assets/person/7.jpeg" alt="" className="profileUserImg"  />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Sushanta Bhowmick</h4>
                <span className="profileInfoDesc">This is the profile info</span>
            </div>
        </div>

        <div className="profileRightBottom">
            <Feed  />
            <Rightbar profile />
          </div>
    </div>
    
    </div>
    
    </div>
  )
}

export default Profile