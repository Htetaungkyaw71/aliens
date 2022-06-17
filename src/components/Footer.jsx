import React from 'react'

function Footer() {
  return (
    <div className='footer mt-10 mb-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
        <div>
            <h1 className='text-white text-2xl font-bold'>TERRA</h1>
            <p className="mt-3 copy">
                &copy; Copyright by Terra Aliens 2022, All rights reserved
            </p>
        </div>
        <div className='text-left sm:text-left md:text-left lg:text-right xl:text-right'>
            <a href="" className='footer-link'>Homepage</a>
            <a href="" className='footer-link'>Trade$TALIEN</a>
            <a href="" className='footer-link'>Provide LP</a>
            <a href="" className='footer-link'>Staking</a>
            <a href="" className='footer-link'>Public release</a>
            <p className='text-left mt-3 sm:text-left md:text-left lg:text-right xl:text-right'>
                <i class="fab fa-twitter mr-7 text-white text-sm"></i>
                <i class="fab fa-facebook mr-7 text-white text-sm"></i>
                <i class="fab fa-discord mr-2 text-white text-sm"></i>
            </p>
        </div>
    </div>
  )
}

export default Footer