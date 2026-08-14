import { useState } from "react";
import Definition from "../components/Definition"
import type { DictionaryAPIResponse } from "../utils/types/api";
import { getWordData } from "../utils/api/fetch";

// DICTIONARY HOME PAGE
const HomePage = () => {
  const [word, setWord] = useState<string>("");
  const [wordData, setWordData] = useState<DictionaryAPIResponse | null>(null);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data = await getWordData(word);
    setWordData(data);
  }

  return (
    <>
      <main className="mx-auto mt-3 w-9/10 md:max-w-4xl "> 
        <h3 className="mb-5 text-center font-medium text-[#4c1f20] md:text-xl md:mb-9">Knowledge is Just a Search Away</h3>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="text-sm font-semibold md:flex md:gap-4 md:text-base">
          <div className="flex gap-2 rounded-lg bg-[#4d3432] p-2 md:w-6/7">
            <input 
              type="search" 
              name="search" 
              placeholder="Please enter a word ..." 
              className="grow rounded-md bg-white p-2"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWord(e.target.value)} 
              />
            <button type="submit" className="w-1/5 max-w-20 rounded-md bg-[#bfafad] p-1.5 text-center cursor-pointer hover:opacity-80">Search</button>
          </div>

          {/* Random Search: Hidden for mobile */}
          <button className="grow rounded-lg bg-[#532425] text-center text-white cursor-pointer hover:opacity-80 md:block">Random</button>
        </form>

        {wordData && <Definition {...wordData}/>}
      </main>
    </>
  )
}

export default HomePage