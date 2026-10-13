import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RandomWordsContext } from "../context/RandomWordsContext";
import type { RandomWordsContextType } from "../context/RandomWordsContext";
import { getWordData } from "../utils/api/fetch";
import { toast } from "react-toastify"
import { FaRandom } from "react-icons/fa";
import Spinner from "./Spinner";

const RandomButton = () => {
    const randomWordData: RandomWordsContextType = useContext<RandomWordsContextType>(RandomWordsContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const mobileClass: string = "flex gap-1 w-full hover:rounded-lg"; 
    const desktopClass: string = "md:block md:rounded-lg md:h-full"
    
    const handleRandomSearch = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        setLoading(true);
        e.preventDefault();

        if (randomWordData.randomWords) {
            const word: string = randomWordData.randomWords![randomWordData.count].word.trim().toLowerCase();
            const data = await getWordData(word);

            if (!data) {
                toast.error("Server Communication Unavailable")
                return
            }

            if (data!.entries.length > 1) {
                navigate(`/search/${word}`);
                randomWordData.updateCounter();
            } else {
                randomWordData.updateCounter();
                document.getElementById("random-btn")?.click();
            }

            setLoading(false);
        } else {
            toast.error("Functionality Not Available");
        }
    }
    
  return (
    <>
        { loading ? (
            <div className="flex">
                <Spinner loading={loading} color={"#532425"} size={45}/>
                <button id="random-btn" onClick={handleRandomSearch}></button>
            </div>   
        ) : (
            <button id="random-btn" onClick={handleRandomSearch} className={`bg-accent-med text-white font-medium px-5 py-4 cursor-pointer hover:scale-90 transition-all duration-300 ${mobileClass} ${desktopClass}`}>
                <FaRandom className="my-auto mr-1 md:hidden"/>Random <span className="md:hidden">Search</span>
            </button>
        )}
    </> 
  )
}

export default RandomButton