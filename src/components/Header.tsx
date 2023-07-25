import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='flex w-full bg-marromescuro h-16 text-bege items-center px-10'>
        <img src="logo.png" alt="logotipo da doce aroma" className='w-16 h-16'/>
        <nav className='w-full h-full flex flex-row justify-end space-x-8 '>
          <Link href="/">
          <button className='p-2 bg-marrromescuro hover:bg-marromescurohover h-full'>Home</button>
          </Link>
          <Link href="/sobre">
          <button className='p-2 bg-marrromescuro hover:bg-marromescurohover '>Sobre Nós</button>
          </Link>
          <button className='p-2 bg-marrromescuro hover:bg-marromescurohover '>Cardapio</button>
          <button className='p-2 bg-marrromescuro hover:bg-marromescurohover '>Contato</button>
        </nav>
    </header>
  );
};

export default Header;
