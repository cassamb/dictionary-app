import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const WordOfTheDay = () => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <aside className='flex flex-col gap-3 p-5 rounded-lg bg-accent mb-3'>
      <h2 className='text-2xl font-semibold text-accent-dark'>Word of the Day | <span className='text-primary'>January 1, 2026</span></h2>
      <h3 className="text-4xl font-medium text-white text-center">Word of the Day</h3>
      {showInfo && 
        <div>
          <h4 className="uppercase text-lg font-medium text-primary">Part of Speech</h4>
          <p className="text-white">Definition</p>
        </div>
      }
      
      <button onClick={() => setShowInfo((prev) => !prev)} className="w-full flex justify-end cursor-pointer">
        {showInfo ? <FaCaretUp className="text-3xl text-accent-dark"/> : <FaCaretDown className="text-3xl text-accent-dark"/>}
      </button>
    </aside>
  )
}

export default WordOfTheDay