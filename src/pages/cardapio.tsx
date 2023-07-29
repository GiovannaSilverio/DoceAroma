import React from 'react'
import CarrosselCardapio from "@/components/CarrosselCar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CardapioD from '@/components/CardapioMenu'

const cardapio = () => {
  return (
    <main>
      <div className='p-200'><CarrosselCardapio></CarrosselCardapio></div>
        
      <div className='bg-marromedio sm:w-500 gap-y-10'>
        <div className='flex justify-center items-center'>
        <h4 className='text-bege text-lg'>NOSSO CARDÁPIO</h4>
        </div>
        <div className='flex justify-center items-center sm:flex-row bg-marromedio font-bege'>
          <CardapioD></CardapioD>
        </div>
      </div>
    </main>
    
  )
}

export default cardapio