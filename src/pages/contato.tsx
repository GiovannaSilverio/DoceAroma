import Link from 'next/link';
import React from 'react'

export const Contato = () => {
  return (
    
        <section className='flex flex-col sm:bg-marromedio w-full h-screen sm:flex-row font-century-gothic'>
        <div className='flex items-center bg-marromedio w-full h-screen justify-center sm:bg-marromedio sm:h-screen'>
          <article className='mb-5 mt-5 gap-y-16'>
          <h1 className='text-center text-bege gap-y-10 text-3xl'>Doce Aroma</h1>
            <h1 className='text-center text-bege gap-y-2 text-xl'>Gostou de algum produto do cardapio?</h1>
            <p className='text-center text-bege m-10 text-lg'>Você acabou de explorar o cardápio da Doce Aroma, uma cafeteria que transborda sabor e encanto em cada página. Agora, é hora de viver essa deliciosa experiência.Aproveite este momento para mimar-se e apreciar os pequenos prazeres da vida. Venha nos visitar na Doce Aroma ou peça pelo botão abaixo e permita-nos encantá-lo com a nossa hospitalidade e sabores inesquecíveis. Estamos ansiosos para transformar sua paixão por café em uma experiência única e memorável. Venha, nos conheça e deixe-se levar pela Doce Aroma.</p>
            <div className='flex items-center justify-center'>
              <Link className=" w-1/3 bg-bege hover:bg-begehover  rounded-lg" href="https://wa.me/5535987010648">
                <button className="items-center text-marromescuro text-center w-full text-xl ">Faça seu pedido clicando aqui.</button>
              </Link>
            </div>
            
          </article>
          
        </div>
        
    </section>
    
  );
};
export default Contato