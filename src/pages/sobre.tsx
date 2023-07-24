import React from 'react';

export const sobre = () => {
  return (
    <section className='bg-marromedio h-screen'>
      <div className='container flex'>
        <div className='w-1/3'>
          <picture><img className='' src="frente.jpg" alt="imagem com a frente da cafeteria" /></picture>
        </div>
        <div className='w-2/3 flex justify-center items-center'>
          <article className='w-2/3'>
            <h1 className='text-center text-bege'>SOBRE NÓS</h1>
            <p className='text-right text-bege m-10'>A Doce Aroma é uma cafeteria que tem por objetivo ser um ambiente aconchegante unindo duas experiências: desfrutar de um delicioso café lendo um incrível livro.</p>
            <p className='text-right text-bege m-10'>Pensando nisso, trouxemos um ambiente ideal para você ler seu livro favorito, com jazz de fundo e uma boa dose de café acompanhada da comida de sua preferência.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default sobre;
