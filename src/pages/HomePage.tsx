import SearchBar from "../components/SearchBar";

// DICTIONARY HOME PAGE
const HomePage = () => {
  return (
    <>
      <main className="mx-auto mt-3 w-9/10 md:max-w-4xl "> 
        <h3 className="mb-5 text-center font-medium text-[#4c1f20] md:text-xl md:mb-9">Knowledge is Just a Search Away</h3>
        <SearchBar/>
      </main>
    </>
  )
}

export default HomePage