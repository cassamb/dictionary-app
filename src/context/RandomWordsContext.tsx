import { createContext, useEffect, useState } from "react";
import type { RandomWordAPIResponse } from "../utils/types/randomWordAPI";

export interface RandomWordsContextType {
    count: number;
    randomWords: RandomWordAPIResponse[] | null;
    updateCounter: () => void;
}

const defaultContextValues = {
    count: 0,
    randomWords: null,
    updateCounter: () => null,
}

export const RandomWordsContext = createContext<RandomWordsContextType>(defaultContextValues);

interface Props {
    children: React.ReactNode;
}

export const RandomWordsProvider = (props: Props) => {
    const [count, setCount] = useState<number>(0);
    const [randomWords, setRandomWords] = useState<RandomWordAPIResponse[] | null>(null);

    const updateCounter = (): void => {
        if (randomWords) {
            if (count < randomWords.length - 1) setCount(prevCount => prevCount + 1);
            else {
                setCount(0);
                updateRandomWords();
            }
        }
    };

    const updateRandomWords = async (): Promise<void> => {
        const res = await fetch("https://random-words-api.kushcreates.com/api?category=wordle&words=50");
        
        if (!res.ok) {
            setRandomWords(null);
            return
        }

        const data = await res.json();
        setRandomWords(data);
    };

    useEffect(() => {updateRandomWords()}, []);

    return (
        <RandomWordsContext value={{count, randomWords, updateCounter}}>
            {props.children}
        </RandomWordsContext>
    )
}