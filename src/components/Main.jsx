import React, { useEffect, useState } from 'react'
import Card from './Card'

const Main = () => {

  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('https://json-best-prices.vercel.app/postos')
    .then(res => res.json()).then(json => setCard(json))
  }, [])

  return (
    <main id='main' className='flex flex-wrap gap-10 justify-center h-[70vh] overflow-scroll items-center px-[40px] bg-[#EEEEEE]'>
      <p className='text-2xl w-full text-center'>MELHORES PREÇOS DE <b>GASOLINA</b></p> 
      <p className='w-full text-center text-xl'>Deve-se considerar apenas Gasolina como combustivel de melhor preço</p>
      {card.map((item, index) => <Card key={item.id} nomePosto={item.posto} 
      endereco={item.bairro || item.Bairro} gas={item.gasolina} eta={item.etanol} 
      die={item.diesel} link={item.localizacao} propLink={'blank'}/>)}
    </main>
  )
}

export default Main
