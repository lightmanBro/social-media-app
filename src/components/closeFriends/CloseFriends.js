import './closeFriends.css'

export default function CloseFriends({user}) {
  return (
          <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarfriendimg" />
            <span className="sidebarFriendName">{user.username}</span>
          </li>
  )
}
