import type { Sense } from "../utils/types/dictionaryAPI"

interface DefinitionProps {
    senses: Sense[];
}

const Definitions = ({senses}: DefinitionProps) => {
  return (
    <div className="bg-definitions w-full h-full rounded-lg flex flex-col py-3 pr-3 gap-3 md:py-4 md:pr-4">
        {senses.map((sense, index) => {
            return (
                <div key={index} className={index < 9 ? "flex pl-3 gap-4 md:pl-4" : "flex pl-2 gap-2.75 md:pl-2.75"}>
                    <h6 className={index < 9 ? "my-auto font-semibold text-lg md:text-xl" : "my-auto font-semibold text-lg md:text-xl"}>{index+1}</h6>
                    <p className="first-letter:capitalize bg-white rounded-lg text-sm p-3 grow md:text-base 2xl:text-lg">{sense.definition}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Definitions