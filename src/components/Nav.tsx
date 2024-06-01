import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='flex items-center justify-center w-full bg-[#111827] '>
        <div className='flex justify-between w-full items-center p-5 '>
            <div>
                <h1 className='text-2xl text-white font-semibold'>Films Collection</h1>
            </div>
            <ul>
                <Link to={"/"} className='text-md text-white'> <a href="">Home</a></Link>
            </ul>
        </div>
    </nav>
  )
}

export default Nav