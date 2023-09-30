import React from 'react'
import "./Topbar.css"
import Search from '@mui/icons-material/Search'
import Person from '@mui/icons-material/Person'
import Chat from '@mui/icons-material/Chat'
import Notifications from '@mui/icons-material/Notifications'
const Topbar = () => {
  return (

    <div className="topbarContainer">

      <div className="topbarLeft">
        <span className="logo">RS</span>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <Search className='searchIcon' fontSize='20px'style={{ padding:'5px'}}/>
          <input className="searchInput" placeholder='Search for friend, post or video'/>
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <div className="topbarLink">Homepage</div>
          <div className="topbarLink"> Timeline</div>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar