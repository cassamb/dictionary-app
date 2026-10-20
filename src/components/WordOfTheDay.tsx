import { useState, useEffect } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { getWordData, getRandomWords } from "../utils/api/fetch";
import type { RandomWordAPIResponse } from "../utils/types/randomWordAPI";
import type { Entry } from "../utils/types/dictionaryAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface WordOfTheDay {
  word: string;
  partOfSpeech: string;
  definition: string;
  lastUpdated: string;
}

const WordOfTheDay = () => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [wod, setWod] = useState<WordOfTheDay | null>(null); 

  const handleWordSearch = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    navigate(`/search/${wod?.word}`)
  }

  const updateWordOfTheDay = async (currentDate: string): Promise<void> => {
    const randomWords: RandomWordAPIResponse[] | null = await getRandomWords();

    if (randomWords) {
      for (let i: number = 0; i < randomWords.length; i++) {
        const word: string = randomWords[i].word.trim().toLowerCase();
        const data = await getWordData(word);

        if (!data) {
          toast.error("Server Communication Unavailable")
          return
        }
        
        // if suitable candidate is found ...
        if (data.entries.length > 2) { 
          const entry: Entry = data.entries[0];

          const wordOfTheDay: WordOfTheDay = { 
            word: word, 
            partOfSpeech: entry.partOfSpeech, 
            definition: entry.senses[0].definition, 
            lastUpdated: currentDate 
          };
          
          localStorage.setItem("wordOfTheDay", JSON.stringify(wordOfTheDay)); // update the localStorage variable (for logic updates)
          setWod(wordOfTheDay);
          return
        } else {
          if (i++ >= randomWords.length) updateWordOfTheDay(currentDate);
        }
      }
    } else toast.error("Error Retrieving Word of the Day Data");
  }

  useEffect(() => {
    const today: Date = new Date();
    const dateStr: string = today.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"});
    const storedData: string | null = localStorage.getItem("wordOfTheDay");

    // if there is no WOD data in local storage
    if (storedData === null) {
      updateWordOfTheDay(dateStr);
    } else {
      const data: WordOfTheDay = JSON.parse(storedData); 
      
      // check if the data is out of date
      if (data.lastUpdated != dateStr) updateWordOfTheDay(dateStr);                                    
      else setWod(data);
    }
  },[]);

  return (
    <aside className='flex flex-col gap-3 p-5 rounded-lg bg-accent mb-3'>
      <h2 className='text-2xl font-semibold text-accent-dark'>Word of the Day | <span className='text-primary'>{wod?.lastUpdated}</span></h2>
      <div className="text-center text-white font-medium">
        <button onClick={handleWordSearch} className="cursor-pointer capitalize text-4xl transition-all duration-300 hover:scale-90">{wod?.word}</button>
      </div>
      {showInfo && 
        <div>
          <h4 className="uppercase text-lg font-medium text-primary">{wod?.partOfSpeech}</h4>
          <p className="text-white">{wod?.definition}</p>
        </div>
      }
      
      <button onClick={() => setShowInfo((prev) => !prev)} className="w-full flex justify-end cursor-pointer">
        {showInfo ? <FaCaretUp className="text-3xl text-accent-dark"/> : <FaCaretDown className="text-3xl text-accent-dark"/>}
      </button>
    </aside>
  )
}

export default WordOfTheDay