import type { DictionaryAPIResponse } from "../types/api";

export const getWordData = async (word: string): Promise<DictionaryAPIResponse | null> => {
    if (word == "") return null;

    const res = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${word}`);
  
    if (!res.ok) throw new Error('Failed to fetch word data');

    const data = await res.json();
    console.log(data);
    return data;
}