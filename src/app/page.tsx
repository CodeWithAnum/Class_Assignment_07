import Link from "next/link"
import NavBar from "./components/Navbar/page"
import Footer from "./components/Footer/page"

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-200">
      <NavBar/>
       <div className="bg-gradient-to-r from-blue-100 via-white to-blue-200">
        <h1 className="font-bold text-[30px] lg:text-[44px] text-center text-blue-900">ASSIGNMENT NO:07</h1>
        <h2 className="font-bold text-[24px] lg:text-[44px] text-center text-indigo-600">DATA FETCHING ASSIGNMENT</h2>
        <p className="text-[22px] text-center font-semibold">Data Fetching Through Server Side And Client Side Rendering</p>
        <div className="gap-[8px] space-y-6 mt-[66px] ">
          <button className="px-8 py-3 ml-[68px] md:ml-[266px] lg:ml-[434px] text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 py-4 text-xl md:px-10 md:py-5 md:text-2xl lg:px-12 lg:py-6 lg:text-3xl xl:px-14 xl:py-7 xl:text-4xl"><Link href={"/Server-Side-Data-Fetching"}>Server Side Rendering</Link></button>
          <button className="px-8 py-3 ml-[69px] md:ml-[266px] lg:ml-[441px] text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 py-4 text-xl md:px-10 md:py-5 md:text-2xl lg:px-12 lg:py-6 lg:text-3xl xl:px-14 xl:py-7 xl:text-4xl"><Link href={"/Client-Side-Data-Fetching"}>Client Side Rendering</Link></button>
        </div>
       </div>
       <br/>
       <br/>
       <br/>
       <Footer/>
    </div>
  )
}

export default Home

