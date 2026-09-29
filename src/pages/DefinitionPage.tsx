import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import type { DictionaryAPIResponse } from "../utils/types/dictionaryAPI";
import { getWordData } from "../utils/api/fetch";
import Definitions from "../components/Definitions";
import SemanticRelations from "../components/SemanticRelations";

const DefinitionPage = () => {
  const { word = "" } = useParams<string>();
  const [wordData, setWordData] = useState<DictionaryAPIResponse | null>(null);

  const fetchData = async (): Promise<void> => {
    if (word == "") {
      setWordData(null);
      return
    }
      
    const data = await getWordData(word);
    console.log(data)
    setWordData(data);
    
  };

  useEffect(() => {fetchData()}, [word]);

  return (
    <main className="flex flex-col gap-8">
      <section className="md:max-w-4xl">
      <h2 className="capitalize text-white font-semibold text-3xl mt-2 md:text-5xl">{wordData?.word}</h2> 
      
      {/* Iterating through each part of speech for the respective definition(s) */}
      {wordData?.entries.map((data, index) => {
        return (
          <section key={index} className="my-4">

            <h5 className="uppercase text-[#4d3432] font-semibold md:text-lg">{data.partOfSpeech}</h5>
            
            <div id="definitions">
              <Definitions senses={data.senses}/>
              <div className="w-5"></div>
            </div>

            <SemanticRelations type={"synonyms"} words={data.synonyms}/>
            <SemanticRelations type={"antonyms"} words={data.antonyms}/>
            
          </section>
        )
      })} 
    </section>
    </main>
  )
}

export default DefinitionPage