export interface DictionaryAPIResponse {
    word:    string;
    entries: Entry[];
    source:  Source;
}

export interface Entry {
    language:       Language;
    partOfSpeech:   string;
    pronunciations: Pronunciation[];
    forms:          Form[];
    senses:         Sense[];
    synonyms:       string[];
    antonyms:       string[];
}

export interface Form {
    word: string;
    tags: string[];
}

export interface Language {
    code: string;
    name: string;
}

export interface Pronunciation {
    type: Type;
    text: string;
    tags: Tag[];
}

export type Tag = "General American" | "Received Pronunciation" | "General Australian" | "New Zealand";

export type Type = "ipa";

export interface Sense {
    definition: string;
    tags:       string[];
    examples:   string[];
    quotes:     Quote[];
    synonyms:   unknown[];
    antonyms:   unknown[];
    subsenses:  unknown[];
}

export interface Quote {
    text:      string;
    reference: string;
}

export interface Source {
    url:     string;
    license: License;
}

export interface License {
    name: string;
    url:  string;
}
