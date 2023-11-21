import React from 'react'
import Button from './Button'

const Card = ({nomePosto, endereco, gas, eta, die, link, propLink}) => {
  return (
    <div className='flex flex-col justify-between h-[320px] w-[300px] bg-black rounded-lg text-white px-[20px] py-[40px]'>
      <div>
        <h2 className='font-normal text-[30px] leading-none'>{nomePosto}</h2>
        <p className='opacity-60'>{endereco}</p>
      </div>
      <div className='opacity-90'>
        <p>Gasolina: <span className='font-bold text-[#ED2A25]'>{gas}</span> BRL</p>
        <p>Etanol: <span className='font-bold text-[#ED2A25]'>{eta}</span> BRL</p>
        <p>Diesel: <span className='font-bold text-[#ED2A25]'>{die}</span> BRL</p>
      </div>
      <Button link={link} propLink={propLink} content={'Rotas'} className={'no-underline w-[120px] bg-white text-[black] font-semibold py-[.1rem]'}/>
    </div>
  )
}

export default Card
