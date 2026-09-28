import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WordOfTheDay from "../components/WordOfTheDay";

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <div className="mx-auto w-9/10 flex flex-col gap-10 md:max-w-4xl ">
        <h2 className="text-center font-medium text-[#4c1f20] md:text-2xl">Knowledge is Just a Search Away</h2>
        <main className="flex flex-col gap-8"> 
          <SearchBar/>
          <Outlet/>
        </main>
        <WordOfTheDay/>
      </div>
    </>
    
  )
}

export default MainLayout