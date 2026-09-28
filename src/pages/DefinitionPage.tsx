import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import type { DictionaryAPIResponse } from "../utils/types/dictionaryAPI";
import { getWordData } from "../utils/api/fetch";
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

            {/* definitions */}
            <section className="bg-[#998582] rounded-lg flex flex-col p-4 gap-3">
              {data.senses.map((def, def_index) => {
                return (
                  <div key={def_index} className={def_index < 9 ? "flex gap-5.5" : "flex gap-4.5"}>
                    <h6 className={def_index < 9 ? "my-auto ml-3 font-semibold text-lg md:text-xl" : "my-auto ml-1.5 font-semibold text-lg md:text-xl"}>{def_index+1}</h6>
                    <p className="bg-white rounded-lg text-sm p-3 grow md:text-base">{def.definition}</p>
                  </div>
                )
              })}
            </section>

            <SemanticRelations type={"synonymns"} words={data.synonyms}/>
            <SemanticRelations type={"antonymns"} words={data.antonyms}/>
            
          </section>
        )
      })} 
    </section>
    </main>
  )
}

export default DefinitionPage