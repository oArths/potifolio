export interface TranslationObject {
  [key: string]: string | TranslationObject;
}

export interface Translations {
  [key: string]: TranslationObject;
}

export type LanguageCode = 'pt' | 'en';
