import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './profile.css'


export default function Profile() {
  return (
    <>
          <Topbar/>
            <div className="profile">
              <Sidebar/>
              <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">

                    <img src="assets/post/3.jpeg" className='profileCoverImg' alt="" />
                    <img src="assets/person/7.jpeg" className='profileUserImg' alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName' >Kabiraj Pan</h4>
                        <span className='profileInfoDesc' >Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque expedita, repellendus laboriosam asperiores dolorem  praesentium?</span>

                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
              </div>
            </div>
            
        </>
  )
}
