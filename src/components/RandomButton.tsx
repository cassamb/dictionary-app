import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RandomWordsContext } from "../context/RandomWordsContext";
import type { RandomWordsContextType } from "../context/RandomWordsContext";
import { getWordData } from "../utils/api/fetch";
import { toast } from "react-toastify"

import Spinner from "./Spinner";

const RandomButton = () => {
    const randomWordData: RandomWordsContextType = useContext<RandomWordsContextType>(RandomWordsContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    
    const handleRandomSearch = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        setLoading(true);
        e.preventDefault();

        if (randomWordData.randomWords) {
            const word: string = randomWordData.randomWords![randomWordData.count].word.trim().toLowerCase();
            const data = await getWordData(word);

            if (!data) {
                toast.error("API Unavailable")
                return
            }

            if (data!.entries.length > 1) {
                navigate(`/search/${word}`);
                randomWordData.updateCounter();
                setLoading(false);
            } else {
                randomWordData.updateCounter();
                document.getElementById("random-btn")?.click();
            }
        } else {
            toast.error("Functionality Not Available");
        }
    }
    
  return (
    <>
        { loading ? (
            <>
                <Spinner loading={loading} color={"#532425"} size={45}/>
                <button id="random-btn" onClick={handleRandomSearch}></button>
            </>   
        ) : (
            <button id="random-btn" onClick={handleRandomSearch} className="grow rounded-lg bg-[#532425] text-center text-white cursor-pointer transition-all duration-300 hover:scale-90 md:block">Random</button>
        )}
        
    </>
    
  )
}

export default RandomButton