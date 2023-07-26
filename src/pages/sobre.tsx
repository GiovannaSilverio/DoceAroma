import React from 'react';

export const Sobre = () => {
  return (
    <section className='flex flex-col sm:bg-marromedio w-full h-screen sm:flex-row'>

        <div className='flex items-center w-full sm:bg-marrommedio sm:bg-marromedio sm:w-1/2 sm:h-screen'>
          <picture className='h-full w-full sm:h-2/3 sm:m-10'>
            <img className='sm:rounded-md h-full w-full object-cover' src="frente.jpg" alt="imagem com a frente da cafeteria" />
          </picture>
        </div>
        <div className='flex items-center bg-marromedio w-full h-screen justify-center sm:bg-marromedio sm:w-1/2 sm:h-screen'>
          <article className=''>
            <h1 className='text-center text-bege gap-y-1'>SOBRE NÓS</h1>
            <p className='text-center text-bege m-20'>A Doce Aroma é uma cafeteria que tem por objetivo ser um ambiente aconchegante unindo duas experiências: desfrutar de um delicioso café lendo um incrível livro.</p>
            <p className='text-center text-bege m-20'>Pensando nisso, trouxemos um ambiente ideal para você ler seu livro favorito, com jazz de fundo e uma boa dose de café acompanhada da comida de sua preferência.</p>
          </article>
        </div>
     
    </section>
  );
};

export default Sobre;
