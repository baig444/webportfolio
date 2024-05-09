import React from 'react'
import './navbar.css'
import logo from '../../Assets/logo.png'
import contact from '../../Assets/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
       <h1 className='logo'>F.</h1>
       <div className='Topnav' >
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100}  duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50}  duration={500} className='desktopMenuListItem'>Clients</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50}  duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-40}  duration={500} className='desktopMenuListItem'>Portfolio</Link>
       </div>
       <button className='Topnav-btn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'})
       }}>
        <img src={contact} alt='' className='topnav-img' />Contact Me</button>
    </nav>
  )
}

export default Navbar
