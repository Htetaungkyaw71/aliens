import React from 'react'
import '../index.css'

function ChildNavbar() {
  return (
    <div className='c_navbar'>
      <div className='mt-5 hidden sm:hidden md:hidden lg:block xl:block'>
          <span className='c_title'>Staking</span>
      </div>
      <div className='c_nav mt-5 hidden sm:hidden md:hidden lg:block xl:block '>
            <a href="" className='c-navbar-link'>Dashboard</a>
            <a href="" className='c-navbar-link'>Staking Aliens(5)</a>
            <a href="" className='c-navbar-link'>Unstaking Aliens(5)</a>
            <a href="" className='c-navbar-link'>Activity</a>
            <a href="" className='c-navbar-link'>Market</a>
      </div> 
    </div>
  )
}

export default ChildNavbar