import UncontrolledExample from "@/components/Carousel";
import React, { useState } from 'react';
import Link from 'next/link';
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <section>
      <UncontrolledExample></UncontrolledExample>
      <div className="h-1000px w-full bg-bege" style={{ height: '2000px' }}>
        <section className="h-1/4 bg-marromedio justify-center w-full flex flex-col">
          <text className="flex items-center justify-center">
          <h1 className="text-2xl text-bege text-center w-full h-1/5 m-0">O MELHOR CAFÉ DO VALE DO PARAÍBA</h1>
          </text>
          <div className="h-4/5 flex flex-row gap-x-12 items-center justify-center">
            <picture className="h-full w-1/4 flex flex-col items-center justify-center relative ms-2">
              <img className="h-1/2 sm:h-2/3 w-full rounded-md opacity-70" src="cafe.jpg" />
              <Link className="absolute w-2/3 text-marromescuro bg-bege  hover:bg-begehover rounded-lg" href="/cardapio">
                <button className="w-full text-center">Bebidas</button>
              </Link>
            </picture>
            <picture className="h-full w-1/4 flex flex-col items-center justify-center relative">
              <img className="h-1/2 sm:h-2/3 w-full rounded-md opacity-70" src="croissant.jpg" />
              <Link className="text-marromescuro absolute w-2/3 bg-bege hover:bg-begehover rounded-lg" href="/cardapio">
                <button className="text-center w-full ">Salgados</button>
              </Link>
            </picture>           
            <picture className="h-full w-1/4 flex flex-col items-center justify-center relative me-2">
              <img className="h-1/2 sm:h-2/3 w-full rounded-md opacity-70" src="bolo.jpg" />
              <Link className="absolute w-2/3 text-marromescuro bg-bege hover:bg-begehover rounded-lg" href="/cardapio">
                <button className="w-full text-center">Doces</button>
              </Link>
            </picture>
          </div>
        </section>
        <section className="h-1/4 bg-bege w-full">
          <div className="flex flex-col items-center justify-center " style={{width: "100%", height:"100%"}}>
            <div  className="flex h-1/6 justify-center items-center">
              <img className="me-4 h-1/3" src="map.png"/><h1 className="w-full text-marromescuro text-2xl" >LOCALIZAÇÃO</h1>
            </div>
            <iframe className="rounded-xl w-2/3" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3671.9174236371296!2d-45.58247328503222!3d-23.026803984950913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1staubate%20shopping!5e0!3m2!1spt-BR!2sbr!4v1690571066929!5m2!1spt-BR!2sbr" 
              width="600" 
              height="450" 
              style={{border:"0"}}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
                
              </iframe>
              <span className="text-marromescuro text-center mt-2">Contamos com 02 unidades no Vale do Paraíba nas cidades de Lorena e Taubaté</span>
          </div>
        </section>
        <section className="h-1/4 flex flex-col bg-marromedio justify-center items-center w-full">
          <h1 className="text-bege text-2xl flex items-center h-1/4">ULTIMOS LANÇAMENTOS:</h1>
          <section className="flex items-center justify-center gap-x-12 h-3/4 w-full">
          <picture className="relative ms-3 h-1/2 w-full sm:h-2/3 sm:m-0 sm:w-1/5 flex justify-center items-center opacity-40 hover:opacity-100 picture-container">
              <img className="h-full rounded-full w-full" src="frapuccino.jpg" alt="Brownie" />
            </picture>
            <picture className="relative h-1/2 w-full sm:h-2/3 sm:w-1/5 flex justify-center items-center opacity-40 hover:opacity-100 picture-container">
              <img className="h-full rounded-full w-full" src="pudim.jpg" alt="Brownie" />
            </picture>
            <picture className="relative h-1/2 w-full me-3 sm:h-2/3 sm:w-1/5 flex justify-center items-center opacity-40 hover:opacity-100 picture-container">
              <img className="h-full rounded-full w-full" src="brownie.jpg" alt="Brownie" />
            </picture>

          </section>
        </section>
        <section className="flex justify-between h-1/4 bg-bege w-full">
          <picture className="w-1/2">
            <img className="h-4/5 w-3/4 rounded-md ms-5 mt-5 " src="bolosobre.jpg"/>
          </picture>
          <div className="flex flex-col w-1/2 items-center justify-center">
            <h1 className="text-center text-lg">CONHEÇA MAIS</h1>
            <h1 className="text-lg">SOBRE NÓS</h1>
            <Link className="mt-3 w-2/6 text-bege text-center bg-marromescuro rounded-lg p-2 hover:bg-marromescurohover" href="/sobre">
              <button>AQUI</button>
            </Link>
            </div>
        </section>
      </div>
    </section>
  )
}
