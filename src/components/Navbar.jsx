import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-[40px] w-full bg-[#EEEEEE]'>
        <h2 className='font-bold text-[24px]'>Local<span className='text-[#ED2A25]'>ezy.</span></h2>
        <Button link={'#contact'} propLink={'self'} content={'Contato'} className={'py-[.1rem] no-underline'}/>
    </nav>
  )
}

export default Navbar
