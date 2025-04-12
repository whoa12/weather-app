import React from 'react'
import './Header.css'
import { IoSearch } from "react-icons/io5";


const Header = () => {
  return (
    <div className='search-header'>
      <div className='search'>
        <input type = 'text' placeholder='Search for a city'  />
        <button className='search-btn'>
          <IoSearch  />
        </button>
      </div>
      
    </div>
  )
}

export default Header
