import type { DictionaryAPIResponse } from "../types/dictionaryAPI";
import type { RandomWordAPIResponse } from "../types/randomWordAPI";

export const getWordData = async (word: string): Promise<DictionaryAPIResponse | null> => {
    const res = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${word}`);
  
    if (!res.ok) throw new Error('Failed to fetch word data');

    const data = await res.json();
    return data;
}

export const getRandomWords = async (): Promise<RandomWordAPIResponse[] | null> => {
    const res = await fetch("https://random-words-api.kushcreates.com/api?language=en&words=10");
    
    if (!res.ok) throw new Error('Failed to fetch random words');

    const data = await res.json();
    return data;
}
