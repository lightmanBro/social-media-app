import React from 'react'
import './rightbar.css'
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Olaromade Olagunju</b> and <b>3 other friends</b> have birthday today</span>
        </div>
        <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          <li className="rightBarFriends">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/friend-1.jpg" alt="" className="rightbarProfileimg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Omotoso Kehinde</span>
          </li>
          <li className="rightBarFriends">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/friend-1.jpg" alt="" className="rightbarProfileimg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Omotoso Kehinde</span>
          </li>
          <li className="rightBarFriends">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/friend-1.jpg" alt="" className="rightbarProfileimg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Omotoso Kehinde</span>
          </li>
          <li className="rightBarFriends">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/friend-1.jpg" alt="" className="rightbarProfileimg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Omotoso Kehinde</span>
          </li>
          <li className="rightBarFriends">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/friend-1.jpg" alt="" className="rightbarProfileimg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Omotoso Kehinde</span>
          </li>
          <li className="rightBarFriends">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/friend-1.jpg" alt="" className="rightbarProfileimg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Omotoso Kehinde</span>
          </li>
          <li className="rightBarFriends">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/friend-1.jpg" alt="" className="rightbarProfileimg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Omotoso Kehinde</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
