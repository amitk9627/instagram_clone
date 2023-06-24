import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineSearch, AiOutlineMessage, AiOutlineHeart } from "react-icons/ai"
import { MdOutlineExplore } from "react-icons/md"
import {CgProfile} from "react-icons/cg"
const NavBar = () => {
  // AiOutlineHome
  return (
    <div className='navbar-wrap'>

      <div className='logo'>
        <h1 style={{ color: "white", }}>Instagram</h1>
      </div>
      <div className='link-wrap'>
        <AiOutlineHome className="link"/>
        <NavLink to="/" className="link">Home</NavLink>
      </div>
      <div className='link-wrap'>
        <AiOutlineSearch className="link"/>
        <NavLink to="/profile" className="link">Search</NavLink>
      </div>
      <div className='link-wrap'>
        <MdOutlineExplore className="link"/>
        <NavLink to="/profile" className="link">Explore</NavLink>
      </div>
      <div className='link-wrap'>
        <AiOutlineMessage className="link"/>
        <NavLink to="/profile" className="link">Message</NavLink>
      </div>
      <div className='link-wrap'>
        <AiOutlineHeart className="link"/>
        <NavLink to="/profile" className="link">Notification</NavLink>
      </div>
      <div className='link-wrap'>
        <CgProfile className="link"/>
        <NavLink to="/profile" className="link">Profile</NavLink>
      </div>

    </div>
  )
}

export default NavBar
