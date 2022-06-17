import React from 'react'
import '../index.css'

function Navbar() {
  return (
      <div className='navbar'>
          <div>
              <span className='title text-2xl font-bold'>TERRA</span>
              <a href="" className='navbar-link hidden sm:hidden md:inline lg:inline xl:inline 2xl:inline'>Homepage</a>
              <a href="" className='navbar-link hidden sm:hidden md:inline lg:inline xl:inline 2xl:inline'>Staking</a>
              <a href="" className='navbar-link hidden sm:hidden md:inline lg:inline xl:inline 2xl:inline'>Public release</a>
          </div>
        <div>
              <button className='navbar-button'>
                terragf..au35
              <i className="fas fa-angle-down pl-3"></i>
              </button>
        </div> 
      </div>
  )
}

export default Navbar