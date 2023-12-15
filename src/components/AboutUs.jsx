import React from 'react'

const AboutUs = () => {
  return (
    <section id='aboutUs' className='flex justify-center h-auto bg-[#EEEEEE] p-[40px]'>
        <div className='text-justify relative flex flex-col self-start max-w-[800px] font-bold text-[84px] max-md:text-[50px] tracking-tighter leading-none'>
            <span className='z-50'>Sobre Nós.</span>
            <p className='mt-[1rem] text-[16px] tracking-normal font-normal'>
            Nós, estudantes da Fasipe Cuiabá, somos apaixonados por tecnologia e inovação. Desenvolvemos o Localezy, um guia de preços de postos de gasolina na cidade, visando facilitar a vida dos moradores. Com criatividade e comprometimento, buscamos impactar positivamente a comunidade, oferecendo uma solução prática para economizar tempo e dinheiro ao abastecer.
            </p>

            <p className='mt-[1rem] text-[16px] tracking-normal font-normal'>
            O Localezy é o seu guia online para os preços dos postos de gasolina em Cuiabá. Oferecemos informações atualizadas e confiáveis para ajudar você a encontrar os melhores preços de combustível na cidade. Nosso objetivo é simplificar sua busca, economizando seu tempo e dinheiro, para que possa tomar decisões informadas na hora de abastecer. Junte-se a nós e descubra uma maneira mais fácil de encontrar os melhores preços de gasolina em Cuiabá.</p>
        </div>
    </section>
  )
}

export default AboutUs
