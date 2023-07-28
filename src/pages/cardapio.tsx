import React from 'react'
import CarrosselCardapio from "@/components/CarrosselCar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CardapioD from '@/components/CardapioMenu'

const cardapio = () => {
  return (
    <main>
      <div>cardapio</div>
        <CarrosselCardapio></CarrosselCardapio>
      <div className='flex bg-marromedio justify-center items-center h-4'><h4 className='text-bege text-lg'>NOSSO CARDÁPIO</h4></div>

      <div className='bg-red-800 h-50'><h2 className='text-bege text-lg'>TESTANDO COR</h2></div>

      <div>
        <div className='flex justify-center items-center bg-marromedio font-bege'>
          <CardapioD></CardapioD>
        </div>
          
      </div>


    </main>
    
  )
}

export default cardapio