import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-10 justify-between items-center px-6 py-8'>
        <h2 className='font-bold text-3xl'>OFFVERSE</h2>
        <ul className='flex gap-9 px-8'>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header