import React from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'
export default function Post() {
  return (
    <div className='post'>
          <div className="postWrapper">
                    <div className="postTop">
                              <div className="postTopLeft">
                                        <img className='postProfileImg' src="/assets/image-2.jpg" alt="" />
                                        <span className='postUsername'>Omotoso David</span>
                                        <span className='postDate'>5 mins ago</span>
                              </div>
                              <div className="postTopRight">
                                  <MoreVert/>
                              
                              </div>
                    </div>
                    <div className="postCenter">
                              <span className="postText"> Hey! its my first post:) </span>
                              <img className='postImg' src="/assets/image-3.jpg" alt="" />
                    </div>
                    <div className="postBottom">
                              <div className="postBottomLeft">
                                        <img src="/assets/like.png" alt="" className="likeIcon" />
                                        <img src="/assets/heart.png" alt="" className="likeIcon" />
                                        <span className="postLikeCounter">32 people like it</span>
                              </div>
                              <div className="postBottomRight">
                                        <span className="postCommentText">9 comments</span>
                              </div>
                    </div>
          </div>
    </div>
  )
}
