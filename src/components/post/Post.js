import React from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'
export default function Post({post}) {
  console.log(post)
  return (
    <div className='post'>
          <div className="postWrapper">
                    <div className="postTop">
                              <div className="postTopLeft">
                                        <img className='postProfileImg' src="/assets/image-2.jpg" alt="" />
                                        <span className='postUsername'>Omotoso David</span>
                                        <span className='postDate'>{post.date}</span>
                              </div>
                              <div className="postTopRight">
                                  <MoreVert/>
                              
                              </div>
                    </div>
                    <div className="postCenter">
                              <span className="postText">{post.desc} </span>
                              <img className='postImg' src={post.photo} alt="" />
                    </div>
                    <div className="postBottom">
                              <div className="postBottomLeft">
                                        <img src="/assets/like.png" alt="" className="likeIcon" />
                                        <img src="/assets/heart.png" alt="" className="likeIcon" />
                                        <span className="postLikeCounter">{post.like} people like it</span>
                              </div>
                              <div className="postBottomRight">
                                        <span className="postCommentText">{post.comments}</span>
                              </div>
                    </div>
          </div>
    </div>
  )
}
