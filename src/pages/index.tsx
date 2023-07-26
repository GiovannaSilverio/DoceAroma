import UncontrolledExample from "@/components/Carousel"
import Link from 'next/link';
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <UncontrolledExample></UncontrolledExample>
      <div className="h-1000px w-full bg-bege" style={{ height: '2000px' }}>
        <section className="h-1/4 bg-marromedio w-full flex flex-col">
          <h2 className="text-bege w-full h-1/5 m-0">O melhor café do Vale do Paraíba</h2>
          <div className="h-4/5 flex flex-row gap-x-12 items-center justify-center">
            <picture className="h-full w-1/4 flex flex-col items-center justify-center relative">
              <img className="h-2/3 w-full rounded-md opacity-70" src="cafe.jpg" />
              <Link className="absolute w-2/3 bg-bege  rounded-lg" href="/cardapio">
                <button className="w-full text-center">Bebidas</button>
              </Link>
            </picture>
            <picture className="h-full w-1/4 flex flex-col items-center justify-center relative">
              <img className="h-2/3 w-full rounded-md opacity-70" src="croissant.jpg" />
              <Link className="absolute w-2/3 bg-bege  rounded-lg" href="/cardapio">
                <button className="text-center w-full ">Salgados</button>
              </Link>
            </picture>           
            <picture className="h-full w-1/4 flex flex-col items-center justify-center relative">
              <img className="h-2/3 w-full rounded-md opacity-70" src="bolo.jpg" />
              <Link className="absolute w-2/3 bg-bege  rounded-lg" href="/cardapio">
                <button className="w-full text-center">Doces</button>
              </Link>
            </picture>
          </div>
        </section>
        <section className="h-1/4 bg-bege w-full"></section>
        <section className="h-1/4 bg-marromedio w-full"></section>
        <section className="h-1/4 bg-bege w-full"></section>
      </div>
    </main>
  )
}
