import React from 'react'
import './sidebar.css'
import {RssFeed, Chat, Group, Bookmark,Event, HelpOutline, WorkOutline, School, PlayArrowOutlined} from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar'>
          <div className="sidebarWrapper">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon'/>
                    <span className="sidebarListitem">
                      <span className="sidebarListItemtext">Feed</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <Chat className='sidebarIcon' />
                    <span className="sidebarListitem">
                      <span className="sidebarListItemtext">Chat</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <PlayArrowOutlined  className='sidebarIcon'/>
                    <span className="sidebarListitem">
                      <span className="sidebarListItemtext">Video</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <Group  className='sidebarIcon'/>
                    <span className="sidebarListitem">
                      <span className="sidebarListItemtext">Group</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon'/>
                    <span className="sidebarListitem">
                      <span className="sidebarListItemtext">Bookmark</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <HelpOutline className='sidebarIcon'/>
                    <span className="sidebarListitem">
                      <span className="sidebarListItemtext">Questions</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <WorkOutline className='sidebarIcon'/>
                    <span className="sidebarListitem">
                      <span className="sidebarListItemtext">Jobs</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <Event className='sidebarIcon'/>
                    <span className="sidebarListitem">
                      <span className="sidebarListItemtext">Events</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <School className='sidebarIcon'/>
                    <span className="sidebarListitem">
                      <span className="sidebarListItemtext">Courses</span>
                    </span>
              </li>
              <button className='sidebarButton'>Show More</button>
              <hr className='sidebarHr' />
              <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                  <img src="./assets/image-3.jpg" alt="" className="sidebarfriendimg" />
                  <span className="sidebarFriendName">David Rm</span>
                </li>
              </ul>
              <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                  <img src="./assets/image-3.jpg" alt="" className="sidebarfriendimg" />
                  <span className="sidebarFriendName">David Rm</span>
                </li>
              </ul>
              <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                  <img src="./assets/image-3.jpg" alt="" className="sidebarfriendimg" />
                  <span className="sidebarFriendName">David Rm</span>
                </li>
              </ul>
              <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                  <img src="./assets/image-3.jpg" alt="" className="sidebarfriendimg" />
                  <span className="sidebarFriendName">David Rm</span>
                </li>
              </ul>
              <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                  <img src="./assets/image-3.jpg" alt="" className="sidebarfriendimg" />
                  <span className="sidebarFriendName">David Rm</span>
                </li>
              </ul>
            </ul>

          </div>
    </div>
  )
}
