import type { Sense } from "../utils/types/dictionaryAPI"

interface DefintionProps {
    senses: Sense[];
}

const Definitions = ({senses}: DefintionProps) => {
  return (
    <section className="bg-[#998582] w-full h-full rounded-lg flex flex-col p-4 gap-3">
        {senses.map((sense, index) => {
            return (
                <div key={index} className={index < 9 ? "flex gap-5.5" : "flex gap-4.5"}>
                    <h6 className={index < 9 ? "my-auto ml-3 font-semibold text-lg md:text-xl" : "my-auto ml-1.5 font-semibold text-lg md:text-xl"}>{index+1}</h6>
                    <p className="bg-white rounded-lg text-sm p-3 grow md:text-base">{sense.definition}</p>
                </div>
            )
        })}
    </section>
  )
}

export default Definitions