type TranslationValue = string | string[] | TranslationObject;

export interface TranslationObject {
  [key: string]: TranslationValue;
}

export type Translations = Record<LanguageCode, TranslationObject>;

export type LanguageCode = 'pt' | 'en';
