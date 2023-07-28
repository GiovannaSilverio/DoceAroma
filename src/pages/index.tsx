import UncontrolledExample from "@/components/Carousel"
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
          <h2 className="text-bege text-center w-full h-1/5 m-0">O melhor café do Vale do Paraíba</h2>
          </text>
          <div className="h-4/5 flex flex-row gap-x-12 items-center justify-center">
            <picture className="h-full w-1/4 flex flex-col items-center justify-center relative">
              <img className="h-2/3 w-full rounded-md opacity-70" src="cafe.jpg" />
              <Link className="absolute w-2/3 text-marromescuro bg-bege  hover:bg-begehover rounded-lg" href="/cardapio">
                <button className="w-full text-center">Bebidas</button>
              </Link>
            </picture>
            <picture className="h-full w-1/4 flex flex-col items-center justify-center relative">
              <img className="h-2/3 w-full rounded-md opacity-70" src="croissant.jpg" />
              <Link className="text-marromescuro absolute w-2/3 bg-bege hover:bg-begehover rounded-lg" href="/cardapio">
                <button className="text-center w-full ">Salgados</button>
              </Link>
            </picture>           
            <picture className="h-full w-1/4 flex flex-col items-center justify-center relative">
              <img className="h-2/3 w-full rounded-md opacity-70" src="bolo.jpg" />
              <Link className="absolute w-2/3 text-marromescuro bg-bege hover:bg-begehover rounded-lg" href="/cardapio">
                <button className="w-full text-center">Doces</button>
              </Link>
            </picture>
          </div>
        </section>
        <section className="h-1/4 bg-bege w-full">
          <div className="flex flex-col items-center justify-center " style={{width: "100%", height:"100%"}}>
            <div  className="flex h-1/6 items-center">
              <img className="me-4 h-1/6" src="map.png"/><h2 className="text-marromescuro" >LOCALIZAÇÃO</h2>
            </div>
            <iframe className="h-2/3 w-2/3 rounded-xl"
                  width="100%"
                  height="600"
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-23.02356435,%20-45.58174997349619+(Taubat%C3%A9%20Shopping)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  <a href="https://www.maps.ie/population/">Population calculator map
                  </a>
            </iframe>
              <span className="text-marromescuro text-center mt-2">Contamos com 02 unidades no Vale do Paraíba nas cidades de Lorena e Taubaté</span>
          </div>
        </section>
        <section className="h-1/4 bg-marromedio w-full"></section>
        <section className="flex justify-between h-1/4 bg-bege w-full">
          <img className="h-4/5 w-1/3 rounded-md ms-5 mt-5 " src="bolosobre.jpg"/>
          <div className="flex flex-col w-full items-center justify-center">
            <h2>CONHEÇA MAIS</h2>
            <h2>SOBRE NÓS</h2>
            <Link className=" w-2/6 text-bege text-center bg-marromescuro rounded-lg p-2 hover:bg-marromescurohover" href="/sobre">
              <button>AQUI</button>
            </Link>
            </div>
        </section>
      </div>
    </section>
  )
}
