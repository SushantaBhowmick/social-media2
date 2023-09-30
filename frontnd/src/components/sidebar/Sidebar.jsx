import React from 'react'
import "./Sidebar.css"
import RssFeed from '@mui/icons-material/RssFeed'
import Group from '@mui/icons-material/Group'
import Bookmark from '@mui/icons-material/Bookmark'
import HelpOutline from '@mui/icons-material/HelpOutline'
import WorkOutline from '@mui/icons-material/WorkOutline'
import Event from '@mui/icons-material/Event'
import School from '@mui/icons-material/School'
import Chat from '@mui/icons-material/Chat'
import Videos from '@mui/icons-material/VideoCall'
import {Users} from '../../dummyData'
import CloseFriends from '../closeFriends/CloseFriends'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
            <RssFeed className='sidebarIcon' />
            <span className="sidebarListItemText">Feed</span>
          </li>
          
          <li className="sidebarListItem">
            <Chat className='sidebarIcon' />
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <Videos className='sidebarIcon' />
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <Group className='sidebarIcon' />
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon' />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon' />
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon' />
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <Event className='sidebarIcon' />
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <School className='sidebarIcon' />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show Moree</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
         {
          Users.map((u)=>(
            <CloseFriends key={u.id} user={u} />
          ))
         }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar