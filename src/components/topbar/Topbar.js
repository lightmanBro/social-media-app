import './topbar.css'
import { Search } from '@mui/icons-material' 
export default function Topbar() {
  return (
    <div className='topbarContainer'>
          <div className="topbarLeft">
                    <span className="logo">LightmanSocial</span>
          </div>
          <div className="topbarCenter">
                    <div className="searchbar">
                              <Search/>
                              <input type="text" placeholder='search for friends, posts or video' className="searchInput" />
                    </div>
          </div>
          <div className="topbarRight">
                    <div className="topbarLinks"></div>
          </div>
          Topbar




    </div>
  )
}
