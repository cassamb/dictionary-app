import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import type { DictionaryAPIResponse } from "../utils/types/dictionaryAPI";
import { getWordData } from "../utils/api/fetch";
import Definitions from "../components/Definitions";
import SemanticRelations from "../components/SemanticRelations";
import Spinner from "../components/Spinner";

const DefinitionPage = () => {
  const { word = "" } = useParams<string>();
  const [wordData, setWordData] = useState<DictionaryAPIResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    if (word == "") {
      setWordData(null);
      return
    }
      
    const data = await getWordData(word);
    setWordData(data);
    setLoading(false);
  };

  useEffect(() => {fetchData()}, [word]);

  return (
    <main className="flex flex-col gap-8">
      {loading ? ( 
        <Spinner loading={loading} color={"#fff"} size={70} />
      ) : (
        <section className="md:max-w-4xl">
          <h2 className="capitalize text-white font-semibold text-3xl mt-2 md:text-5xl">{wordData?.word}</h2>
          
          {wordData?.entries.length == 0 ? (
            <section className="my-4">
              <h5 className="uppercase text-[#4d3432] font-semibold md:text-lg">NO DEFINITIONS FOUND</h5>
              <div className="bg-[#998582] w-full h-full rounded-lg flex flex-col p-4 gap-3">
                <p className="bg-white rounded-lg text-sm p-3 grow font-semibold md:text-base">
                  Sorry, no definitions for the word you were looking for have been found; however, this does not mean the word you are searching for doesn't exist. You can either attempt the search again at a later time or head to the web instead!
                </p>
              </div>
            </section>
            ) : (
            <>
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
            </>
            )}
        </section>
      )}
    </main>
  )
}

export default DefinitionPage