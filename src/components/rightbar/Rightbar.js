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
      <h1>hey! its Profile</h1>
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
