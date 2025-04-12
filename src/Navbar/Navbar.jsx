import React from 'react'
import { AiTwotoneHome } from "react-icons/ai";
import { RiNewspaperLine } from "react-icons/ri";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import './Navbar.css'







const Navbar = () => {
  return (
    <section className='nav-section'>
        <nav className='navbar'>
            <div className='logo'>
                <h1>Weather App</h1>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>
                        <AiTwotoneHome name='home-icon' />
                        <span>Home</span>
                    </li>
                    <li>
                        <RiNewspaperLine name='news-icon' />
                        <span>Blogs</span>
                    </li>
                    <li>
                        <CiLocationArrow1 name='location-icon' />
                        <span>Map</span>
                    </li>
                    <li>
                        <MdOutlinePhotoSizeSelectActual name='gallery-icon' />
                        <span>Gallery</span>
                    </li>
                    <li>
                        <MdOutlineOndemandVideo name='video-icon' />
                        <span>Videos</span>
                    </li>
                    <li>
                        <MdOutlineLocalPhone name='contact-icon' />
                        <span>Contact</span>    
                    </li>
                    <li>
                        <IoIosLogOut name='logout-icon' />
                        <span>Logout</span> 
                    </li>
                    
                </ul>

            </div>

        </nav>

    </section>
  )
}

export default Navbar
