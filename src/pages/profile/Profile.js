import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRighTop">
            <div className="profileCover">
            <img className='profileCoverImg' 
            src="assets/image-1.jpg" alt="" />

            <img className='profileUserImg' 
            src="assets/image-3.jpg" alt="" />
            </div>
              <div className="profileInfo">
                <h4 className='profileInfoName'>Omotoso Kehinde</h4>
                <span className='profileInfoDesc'>Hello World!</span>

              </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>

      </div>
    </>
         
  )
}
