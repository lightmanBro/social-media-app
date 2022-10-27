import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'


export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Olaromade Olagunju</b> and <b>3 other friends</b> have birthday today</span>
        </div>
        <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () =>{
    return (
      <>
        <h4 className='rightbarTitle' >User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className='rightbarInfoKey'>City:</span>
            <span className="rightbarInfoValue">Lagos</span>
          </div>
          <div className="rightbarInfoItem">
            <span className='rightbarInfoKey'>From:</span>
            <span className="rightbarInfoValue">Akure</span>
          </div>
          <div className="rightbarInfoItem">
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle' >User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowings"></div>
            <div className="rightbarFollowing">
              <img src="assets/friend-1.jpg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Juliet Osuagwu</span>
            </div>
            <div className="rightbarFollowings"></div>
            <div className="rightbarFollowing">
              <img src="assets/friend-2.jpg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Juliet Osuagwu</span>
            </div>
            <div className="rightbarFollowings"></div>
            <div className="rightbarFollowing">
              <img src="assets/friend-3.jpg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Juliet Osuagwu</span>
            </div>
            <div className="rightbarFollowings"></div>
            <div className="rightbarFollowing">
              <img src="assets/friend-4.jpg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Juliet Osuagwu</span>
            </div>
        </div>
      </>
      
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
          <ProfileRightbar/>
      </div>
    </div>
  )
}
