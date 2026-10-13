import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WordOfTheDay from "../components/WordOfTheDay";

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <div className="mx-auto w-9/10 flex flex-col gap-6 md:gap-10 md:max-w-4xl 2xl:max-w-5xl">
        <h2 className="text-center font-medium text-accent-dark md:text-xl 2xl:text-2xl">Knowledge is Just a Search Away</h2>
        <main className="flex flex-col gap-2"> 
          <SearchBar/>
          <Outlet/>
        </main>
        <WordOfTheDay/>
      </div>
      <ToastContainer/>
    </>
    
  )
}

export default MainLayout