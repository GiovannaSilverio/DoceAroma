import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='flex w-screen bg-marromescuro h-16 text-bege items-center px-10'>
        <img src="logo.png" alt="logotipo da doce aroma" className='w-16 h-16'/>
        <nav className='hidden sm:w-full sm:h-full sm:flex flex-row sm:items-center sm:justify-end sm:space-x-8'>
          <Link className='text-bege' href="/">
          <button className='p-2 bg-marrromescuro hover:bg-marromescurohover focus:bg-marromedio h-full'>Home</button>
          </Link>
          <Link className='text-bege' href="/sobre">
          <button className='p-2 bg-marrromescuro hover:bg-marromescurohover focus:bg-marromedio '>Sobre Nós</button>
          </Link>
          <Link className='text-bege' href="/cardapio">
          <button className='p-2 bg-marrromescuro hover:bg-marromescurohover focus:bg-marromedio '>Cardapio</button>
          </Link>
          <Link className='text-bege' href="/contato">
          <button className='p-2 bg-marrromescuro hover:bg-marromescurohover focus:bg-marromedio'>Contato</button>
          </Link>
        </nav>
    </header>
  );
};

export default Header;
