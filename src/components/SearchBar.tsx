import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import RandomButton from "./RandomButton";

const SearchBar = () => {
    const navigate = useNavigate();
    const [word, setWord] = useState<string>("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const searchInput = document.querySelector('input[name="search"]') as HTMLInputElement;

        if (/^[A-Za-z]+$/.test(word.trim().toLowerCase())) {
            searchInput.style.borderColor = "#4d3432";
            searchInput.value = "";
            navigate(`/search/${word.trim().toLowerCase()}`)
        } else {
            searchInput.style.borderColor = "red";
            toast.error("Invalid Input");
        }
    }

  return (
    <search className="text-sm font-semibold md:flex md:gap-4 md:text-base">
        <form onSubmit={handleSearch} className="flex gap-2 rounded-lg bg-[#4d3432] p-2 md:w-6/7">
            <input 
                type="search" 
                name="search" 
                placeholder="Please enter a word ..." 
                className="grow rounded-md bg-white p-2 border-2 border-[#4d3432] focus:outline-none"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWord(e.target.value)} 
            />
            <button type="submit" className="w-1/5 max-w-20 rounded-md bg-[#bfafad] p-1.5 text-center cursor-pointer transition-all duration-300 hover:scale-90">Search</button>
        </form> 
        <RandomButton/>
    </search>
  )
}

export default SearchBar