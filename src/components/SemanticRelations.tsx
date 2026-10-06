import { useEffect, useState } from "react";
import { filterAlphabeticalStrings } from "../utils/validation/wordFilter";
import { Link } from "react-router-dom";

interface SemanticRelationProps {
    type: string,   // synonyms or antonyms
    words: string[];
}

const SemanticRelations = ({type, words}: SemanticRelationProps) => {
    const [relatedWords, setRelatedWords] = useState<string[]>([]); 
    const bgColor: string = type == "synonyms" ? "bg-[#3b5c50]" : "bg-[#563b5c]";
    
    useEffect(() => setRelatedWords(filterAlphabeticalStrings(words)), [words]);

  return (
    <aside className="font-semibold py-3 flex flex-wrap justify-baseline gap-1.5 md:gap-2.5">
        <h4 className="capitalize text-lg my-auto pb-2 md:text-xl">{type}</h4>

        {relatedWords.length == 0 && <button className="text-white text-sm md:text-base p-2 bg-[#4e4e4e] rounded-md md:p-3">N/A</button>}

        {relatedWords.map((word, index) => {
            return (
                <Link to={`/search/${word}`} key={index} className={`capitalize cursor-pointer text-white text-sm p-2 ${bgColor} rounded-md transition-all duration-300 hover:scale-90 md:p-3 md:text-base`}>
                    {word}
                </Link>
            )
        })}
    </aside>
  )
}

export default SemanticRelations