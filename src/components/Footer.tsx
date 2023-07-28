import React from 'react';
import { faCoffee, faList } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='flex'>
      <footer className='h-full bg-marromescuro w-full'>
        <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-between px-10'>
          <div className='text-bege mt-2 sm:mb-2'><FontAwesomeIcon icon={faWhatsapp} className='me-2' />12 9999-9999</div>
          <div className='text-bege mt-2 sm:mb-2'><FontAwesomeIcon icon={faFacebook} className='me-2'/>docearomacafe</div>
          <div className='text-bege mt-2 mb-2'><FontAwesomeIcon icon={faInstagram} className='me-2' />@docearomacafe</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
