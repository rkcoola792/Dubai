import React from 'react'

const Header = () => {
  return (
    <div  className='header flex sm:px-24 justify-between items-center py-6' py->
     <div className='left'>
      <div className='logo-image w-[214px]'>
        <img src='/Header Logo.png' alt='header-logo'></img>
      </div>
    </div>
    <div className='right flex gap-12'>
      <p>Home</p>
      <p>About</p>
      <div>
      <div className='title'><p>Services</p></div>
      <div className='subheading-elements hidden'>
      <p>Services</p>
      <p>Services</p>
      <p>Services</p>
      <p>Services</p>
      <p>Services</p>
      </div>
      </div>
      <p>Our Parteners</p>
      <p>Blog</p>
      <p>Home</p>
      <p>Media & Article</p>
    </div>
    </div>
  )
}

export default Header
