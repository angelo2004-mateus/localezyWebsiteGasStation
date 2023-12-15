import React from 'react'
import Button from './Button'

import mainPhoto from '../assets/mainPhotoHome.jpg'

const Header = () => {
  return (
    <header className='flex flex-col gap-[100px] px-[40px] pb-[20px] items-center w-full h-screen bg-[#EEEEEE]'>
        <div className='flex flex-col self-start ml-[80px] max-md:ml-0 mt-[40px] font-bold text-[84px] max-md:text-[50px] tracking-tighter leading-none'>
            <span>Localize Os</span>
            <span>Melhores Postos.</span>
                <p className='mt-[1rem] text-[16px] tracking-normal font-normal'>Conheça os melhores preços de Cuiabá.</p>
                <div className='flex gap-x-4'>
                    <Button content='Vamos Lá' link={'#main'} propLink={'self'} className={'mt-[1rem] w-[8rem]'}/>
                    <Button content='Sobre Nós'link={'#aboutUs'} propLink={'self'} className={'mt-[1rem] w-[8rem] bg-black'}/>
                </div>
        </div>

        <div style={{backgroundImage: `url('${mainPhoto}')`}} className='bg-cover bg-no-repeat bg-center h-[100%] w-[100%] '>
        </div>
    
    </header>
  )
}

export default Header
