import type { DictionaryAPIResponse } from "../types/dictionaryAPI";

export const getWordData = async (word: string): Promise<DictionaryAPIResponse | null> => {
    const res = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${word}`);
  
    if (!res.ok) throw new Error('Failed to fetch word data');

    const data = await res.json();
    return data;
}
