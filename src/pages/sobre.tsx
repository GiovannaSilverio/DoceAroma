import React from 'react';

export const Sobre = () => {
  return (
    <section className='flex flex-col bg-marromedio sm:bg-marromedio h-screen flex items-center'>
      <div className='sm:container flex justify-center'>
        <div className='sm:w-1/3 '>
          <picture><img className='sm:rounded-md h-3/3 m-20 w-full' src="frente.jpg" alt="imagem com a frente da cafeteria" /></picture>
        </div>
        <div className='sm:w-2/3 flex flex-row justify-center items-center'>
          <article className='w-2/3'>
            <h1 className='text-center text-bege'>SOBRE NÓS</h1>
            <p className='text-right text-bege m-20'>A Doce Aroma é uma cafeteria que tem por objetivo ser um ambiente aconchegante unindo duas experiências: desfrutar de um delicioso café lendo um incrível livro.</p>
            <p className='text-right text-bege m-20'>Pensando nisso, trouxemos um ambiente ideal para você ler seu livro favorito, com jazz de fundo e uma boa dose de café acompanhada da comida de sua preferência.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
