import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';


const DefintionPage = () => {
    const { word } = useParams<string>();
    const [ wordData, setWordData ] = useState("");

    // Only executes upon initial render
    useEffect(() => {
        const fetchWord = async () => {
            try {
                const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                const data = await res.json();
                setWordData(data);
                console.log(data);
            } catch (err) {
                console.log(`Error fetching data ${err}`);
            }
        }
        fetchWord();
    }, []);
  
    return (
        <>
            {/* Search Bar */}
            <section className="mx-auto mt-3 w-9/10 md:max-w-4xl">
                <h3 className="mb-5 text-center font-medium text-[#4c1f20] md:text-xl md:mb-9">Knowledge is Just a Search Away</h3>
                <SearchBar/>
            </section>

            {/* Definition Section */}
            <main className="mx-auto mt-3 w-9/10 md:max-w-4xl "> 
                <h2 className="capitalize text-white font-semibold text-3xl mt-2 md:text-5xl">{word}</h2> 
                {/* <!-- Phonetics --> */}
                <div className="flex gap-1.5 text-white font-normal mb-2">
                    {/* Audio Button */}
                {/* <button className="cursor-pointer hover:opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                    <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                    </svg>
                </button> */}
                <p className="pb-1 md:text-xl">[dik-SHə-nerē]</p>
                </div>

                {/* <!-- Definition 1 --> */}
                <section className="my-4">
                    <h5 className="uppercase text-[#4d3432] font-semibold md:text-lg">noun</h5>

                    {/* <!-- Noun Definitions #998582--> */}
                    <section className="bg-[#998582] rounded-lg flex flex-col p-3 gap-3">
                        <div className="flex gap-3.5">
                        <h6 className="my-auto font-semibold text-lg md:text-xl">1</h6>
                        <p className="bg-white rounded-lg text-sm p-3 grow md:text-base">A reference work with a list of words from one or more languages, normally ordered alphabetically, explaining each word's meaning, and sometimes containing information on its etymology, pronunciation, usage, translations, and other data.</p>
                        </div>
                        <div className="flex gap-3">
                        <h6 className="my-auto font-semibold text-lg md:text-xl">2</h6>
                        <p className="bg-white rounded-lg text-sm p-3 grow md:text-base">(preceded by the A) A synchronic dictionary of a standardised language held to only contain words that are properly part of the language.</p>
                        </div>
                        <div className="flex gap-3">
                        <h6 className="my-auto font-semibold text-lg md:text-xl">3</h6>
                        <p className="bg-white rounded-lg text-sm p-3 grow md:text-base">(by extension) Any work that has a list of material organized alphabetically; e.g., biographical dictionary, encyclopedic dictionary.</p>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}


export default DefintionPage;