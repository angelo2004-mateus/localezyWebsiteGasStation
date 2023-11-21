import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='flex h-[50vh] w-full bg-[#EEEEEE] px-[40px]'>
        <form method='POST' action='https://formsubmit.co/angelomateusnerysouza@gmail.com' className='m-auto flex flex-col items-center justify-center px-[20px] gap-y-5 w-[1200px] h-[300px] rounded-lg bg-gray-300'>
            <h2 className='text-[24px] text-center'>Envie Atualizações de Preços Para Nós</h2>
            <input placeholder='Digite o nome do posto' required name='nomePosto' className='w-[400px] max-sm:w-[90%] border border-black border-opacity-40 p-[10px] outline-none rounded-full bg-transparent' type="text" />
            <input placeholder='Digite o valor da combustível' required name='valor' className='w-[400px] max-sm:w-[90%] border border-black border-opacity-40 p-[10px] outline-none rounded-full bg-transparent' type="text" />
            <button type='submit' className='w-[200px] max-sm:w-[90%] py-[10px] bg-black border-none text-white font-bold outline-none rounded-full'>Enviar</button>
        </form>
    </section>
  )
}

export default Contact
