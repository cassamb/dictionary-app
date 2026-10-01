import { createContext, useEffect, useState } from "react";
import type { RandomWordAPIResponse } from "../utils/types/randomWordAPI";

export interface RandomWordsContextType {
    count: number;
    randomWords: RandomWordAPIResponse[] | null;
    updateCounter: () => void;
    // updateRandomWords: () => void;
}

const defaultContextValues = {
    count: 0,
    randomWords: null,
    updateCounter: () => null,
    // updateRandomWords: () => null,
}

export const RandomWordsContext = createContext<RandomWordsContextType>(defaultContextValues);

interface Props {
    children: React.ReactNode;
}

export const RandomWordsProvider = (props: Props) => {
    const [count, setCount] = useState<number>(0);
    const [randomWords, setRandomWords] = useState<RandomWordAPIResponse[] | null>(null);

    // test data
    const testData: RandomWordAPIResponse[] = [
        {"word":"masty","length":5,"category":"wordle","language":"en"},
        {"word":"spool","length":5,"category":"wordle","language":"en"},
        {"word":"majoe","length":5,"category":"wordle","language":"en"},
        {"word":"sabre","length":5,"category":"wordle","language":"en"},
        {"word":"limba","length":5,"category":"wordle","language":"en"}
    ];

    // fetch API data here
    useEffect(() => setRandomWords(testData), []);

    const updateCounter = (): void => {
        if (randomWords) {
            if (count < randomWords.length - 1) setCount(prevCount => prevCount + 1);
            else {
                setCount(0);

                // update randomWords array
            }
        }
    };

    // const updateRandomWords = () => null;

    return (
        <RandomWordsContext value={{count, randomWords, updateCounter}}>
            {props.children}
        </RandomWordsContext>
    )
}