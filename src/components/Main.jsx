import React from 'react'
import Card from './Card'

function Main() {
  return (
    <div className='pt-8'>
        {/* Text Container */}
        <div className='grid grid-cols-1  rounded-t-xl main-first sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
            <div className='border-r border-b main-border p-5'>
                <span className='main-first-text text-sm'>Total Aliens</span>
                <h2 className='text-white text-2xl font-bold '>15 Aliens</h2>
            </div>
            <div className='border-r border-b border-t main-border p-5'>
                <span className='main-first-text text-sm'>Staked Terra Aliens</span>
                <h2 className='text-white text-2xl font-bold '>5 Aliens</h2>
            </div>
            <div className='border-r border-b border-t  main-border p-5'>
                <span className='main-first-text text-sm'>You have earned:</span>
                <h2 className='text-white text-2xl font-bold '>9.842.876</h2>
            </div>
            <div className='main-border border-b border-t flex justify-between  p-5'>
                <div>
                    <span className='main-first-text text-sm'>Available For Claim</span>           
                    <h2 className='text-white text-2xl font-bold '>876</h2> 
                </div>
                <div>
                    <button className='main-button inline mt-3'>Claim</button>   
                </div>           
            </div>
            <div className='main-border border-b border-r  border-l w-22 p-5'>
                <span className='main-first-text text-sm'>Paid out</span>
                <h2 className='text-white text-2xl font-bold '>9.992.1287</h2>
            </div>
 
        </div>
        {/* Text Container */}


        {/* Card Container */}
        <div className='main-second border-l border-b border-r rounded-b-2xl p-7'>
            <a href="" className='add'>+ Add Alien</a>
            <div className="grid grid-cols-1 gap-10 mt-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">       
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        {/* Card Container */}
     
    </div>
  )
}

export default Main