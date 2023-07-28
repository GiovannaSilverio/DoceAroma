import React from 'react'
import CarrosselCardapio from "@/components/CarrosselCar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Menu from '@/components/MenuCardapio'

const cardapio = () => {
  return (
    <main>
      <div>cardapio</div>
        <CarrosselCardapio></CarrosselCardapio>
      <div className='flex justify-center items-center h-40'>NOSSO CARDÁPIO</div>

      <div>
        <div className='flex justify-center items-center'>
          <Menu></Menu>
        </div>
          
      </div>


    </main>
    
  )
}

export default cardapio