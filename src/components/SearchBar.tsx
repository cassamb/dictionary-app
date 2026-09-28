import { useState } from "react"
import { Link } from "react-router-dom"

const SearchBar = () => {
    const [word, setWord] = useState<string>("");

    const handleRandomSearch = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        console.log("button clicked");
    }

  return (
    <div className="text-sm font-semibold md:flex md:gap-4 md:text-base">
        <search className="flex gap-2 rounded-lg bg-[#4d3432] p-2 md:w-6/7">
            <input 
                type="search" 
                name="search" 
                placeholder="Please enter a word ..." 
                className="grow rounded-md bg-white p-2"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWord(e.target.value)} 
                />
            <Link to={`/search/${word}`} className="w-1/5 max-w-20 rounded-md bg-[#bfafad] p-1.5 text-center cursor-pointer hover:opacity-80">Search</Link>
        </search> 
    <button onClick={handleRandomSearch} className="grow rounded-lg bg-[#532425] text-center text-white cursor-pointer hover:opacity-80 md:block">Random</button>
    </div>
    
  )
}

export default SearchBar