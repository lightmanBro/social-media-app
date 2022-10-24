import React from 'react'
import './sidebar.css'
import {RssFeed, Chat, Group, Bookmark,Event, HelpOutline, WorkOutline, School, PlayArrowOutlined} from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar'>
          <div className="sidebarWrapper">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                    <RssFeed/>
                    <span className="sidebarListaitem">
                      <span className="sidebarListItemtext">Feed</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <Chat/>
                    <span className="sidebarListaitem">
                      <span className="sidebarListItemtext">Chat</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <PlayArrowOutlined/>
                    <span className="sidebarListaitem">
                      <span className="sidebarListItemtext">Video</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <Group/>
                    <span className="sidebarListaitem">
                      <span className="sidebarListItemtext">Group</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <Bookmark/>
                    <span className="sidebarListaitem">
                      <span className="sidebarListItemtext">Bookmark</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <HelpOutline/>
                    <span className="sidebarListaitem">
                      <span className="sidebarListItemtext">Questions</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <WorkOutline/>
                    <span className="sidebarListaitem">
                      <span className="sidebarListItemtext">Jobs</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <Event/>
                    <span className="sidebarListaitem">
                      <span className="sidebarListItemtext">Events</span>
                    </span>
              </li>
              <li className="sidebarListItem">
                    <School/>
                    <span className="sidebarListaitem">
                      <span className="sidebarListItemtext">Courses</span>
                    </span>
              </li>
            </ul>

          </div>
    </div>
  )
}
