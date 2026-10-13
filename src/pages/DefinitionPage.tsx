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
    <>
      {loading ? ( 
        <Spinner loading={loading} color={"#fff"} size={70} />
      ) : (
        <section className="flex flex-col gap-4 pb-6 md:max-w-4xl 2xl:max-w-5xl">
          <h2 className="capitalize text-white font-semibold mt-2 text-3xl md:mt-4 md:text-5xl 2xl:text-6xl">{wordData?.word}</h2>
          
          {wordData?.entries.length == 0 ? (
            <section>
              <h5 className="uppercase text-primary-dark font-semibold md:text-lg 2xl:text-xl">NO DEFINITIONS FOUND</h5>
              <div className="bg-definitions w-full h-full rounded-lg flex flex-col p-4 gap-3">
                <p className="bg-white rounded-lg text-sm p-3 grow md:text-base 2xl:text-lg">
                  Sorry, no definitions for the word you were looking for have been found; however, this does not mean the word you are searching for doesn't exist. You can either attempt the search again at a later time or head to the web instead!
                </p>
              </div>
            </section>
            ) : (
            <>
              {wordData?.entries.map((data, index) => {
                return (
                  <section key={index}>
                    <h5 className="uppercase text-primary-dark font-semibold md:text-lg 2xl:text-xl">{data.partOfSpeech}</h5>
                    <section className="definitions max-h-64 overflow-y-auto pr-2.5 md:max-h-96">
                      <Definitions senses={data.senses}/>
                    </section>
                    <SemanticRelations type={"synonyms"} words={data.synonyms}/>
                    <SemanticRelations type={"antonyms"} words={data.antonyms}/>
                  </section>
                )
              })} 
            </>
            )}
        </section>
      )}
    </>
  )
}

export default DefinitionPage