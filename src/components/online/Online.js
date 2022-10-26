import './online.css'

export default function Online({ user }) {
  return (
          <ul className="rightbarFriendsList">
          <li className="rightBarFriends">
            <div className="rightbarProfileImgContainer">
              <img src={user.profilePicture} alt="" className="rightbarProfileimg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
        </ul>
  )
}
