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
    <aside className="font-semibold flex pt-5 gap-1.5 md:gap-2.5">
        <h4 className="capitalize text-lg mt-0.5 md:text-xl md:mt-2">{type}:</h4>

        {relatedWords.length == 0 ? (
            <button className="text-white text-sm md:text-base p-2 bg-primary-med rounded-md md:p-3">N/A</button>
        ):(
            <div className="semantic-relations flex max-w-max overflow-x-auto gap-1.5 pb-3 mr-4 md:gap-2.5 md:mr-2.5">
                {relatedWords.map((word, index) => {
                    return (
                        <Link to={`/search/${word}`} key={index} className={`capitalize cursor-pointer text-white text-sm p-2 ${bgColor} rounded-md transition-all duration-300 hover:scale-90 md:p-3 md:text-base`}>
                            {word}
                        </Link>
                    )
                })}
            </div>
        )}
    </aside>
  )
}

export default SemanticRelations