import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-[40px] w-full bg-[#EEEEEE]'>
        <h2 className='font-bold text-[24px] flex'>Local<span className='text-[#ED2A25]'>ezy.</span></h2>
        <img src="https://th.bing.com/th/id/OIP.hSocEZKok4SB0YeHkzRIiwHaCw?w=341&h=130&c=7&r=0&o=5&pid=1.7" alt="" />
        <Button link={'#contact'} propLink={'self'} content={'Contato'} className={'py-[.1rem] no-underline'}/>

    </nav>
  )
}

export default Navbar
