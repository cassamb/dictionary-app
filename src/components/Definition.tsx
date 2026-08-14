import type { DictionaryAPIResponse } from "../utils/types/api";

const Definition = (wordData: DictionaryAPIResponse) => {
  return (
    <section className="mt-3 md:max-w-4xl">
      <h2 className="capitalize text-white font-semibold text-3xl mt-2 md:text-5xl">{wordData.word}</h2> 
      
      {/* Iterating through each part of speech for the definition */}
      {wordData.entries.map((data, index) => {
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

            {/* synonyms */}
            <aside className="font-semibold py-3 flex flex-wrap justify-baseline gap-1.5 md:gap-2.5">
              <h4 className="text-lg my-auto pb-2 md:text-xl">Synonyms:</h4>

              {data.synonyms.length == 0 && <button className="text-white text-sm md:text-base p-2 bg-[#4e4e4e] rounded-md md:p-3">N/A</button>}

              {data.synonyms.map((synonym, syn_index) => {
                return (
                  <button key={syn_index} className="capitalize cursor-pointer text-white text-sm md:text-base p-2 bg-[#3b5c50] rounded-md md:p-3">
                    {synonym}
                  </button>
                )
              })}
            </aside>

            {/* antonyms */}
            <aside className="font-semibold py-3 flex flex-wrap justify-baseline gap-1.5 md:gap-2.5">
              <h4 className="text-lg my-auto pb-2 md:text-xl">Antonyms:</h4>

              {data.antonyms.length == 0 && <button className="text-white text-sm md:text-base p-2 bg-[#4e4e4e] rounded-md md:p-3">N/A</button>}

              {data.antonyms.map((antonym, ant_index) => {
                return (
                  <button key={ant_index} className="capitalize cursor-pointer text-white text-sm md:text-base p-2 bg-[#5e2425] rounded-md md:p-3">
                    {antonym}
                  </button>
                )
              })}
            </aside>
          </section>
        )
      })} 
    </section>
  )
}

export default Definition