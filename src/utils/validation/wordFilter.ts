export const filterAlphabeticalStrings = (words: string[]): string[] => {
    return words.filter((word) => /^[A-Za-z]+$/.test(word));
}