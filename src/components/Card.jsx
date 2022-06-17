import React from 'react'

function Card() {
  return (
    <div className='w-50 h-300 main-border rounded-3xl border octagon'>  
    {/* Card Image */}
        <div className='p-5 pb-4'>
            <img src="https://cdn.vox-cdn.com/thumbor/2xj1ySLIz1EZ49NvSsPzq8Itjyg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg" className='w-80 h-36 rounded-xl'/>
        </div>
    {/* Card Image */}
    {/* Card Text */}
        <div className='pl-5 pb-3 pr-5'>
            <h3 className='text-md text-white'>Terra alien #1234</h3>   
            <div className='mt-2'>
                <div className='flex justify-between'>
                    <span className='card-text'>
                        Earned:
                    </span>
                    <span className='text-white card-text1'>
                        86,498
                    </span>
                </div>
                <div className='line'>
                
                </div>
                <div className='flex justify-between'>
                    <span className='card-text'>
                        Time staked:
                    </span>
                    <span className='text-white  card-text1'>
                        5/7 days
                    </span>
                </div>
            </div>
        </div>
    {/* Card Text */}
     {/* Card Button */}
        <div className='border-t card-bottom'>
            <div className='unstake'>
                <button>Unstake</button>
            </div>
            <div className='collect'>
            <button>Collect</button>
            </div>
            
            
        </div>
     {/* Card Button */}
    </div>
    
  )
}

export default Card