import React from 'react'
import './rightbar.css'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">

            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/person/4.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <div className="rightbarUsername">John Carter</div>
            </li>

            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/person/4.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <div className="rightbarUsername">John Carter</div>
            </li>

            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/person/4.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <div className="rightbarUsername">John Carter</div>
            </li>

            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/person/4.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <div className="rightbarUsername">John Carter</div>
            </li>

            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/person/4.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <div className="rightbarUsername">John Carter</div>
            </li>
            
        </ul>
      </div>
    </div>
  )
}

export default Rightbar