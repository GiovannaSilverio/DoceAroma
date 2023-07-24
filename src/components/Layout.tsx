import Footer from "./Footer"
import Header from "./Header"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Header></Header> 
      {children}
      <Footer></Footer>
    </section>
  )
}