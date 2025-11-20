import { create } from 'zustand';
import pt from '../locales/pt.json';
import en from '../locales/en.json';
import {
  Translations,
  TranslationObject,
  LanguageCode,
} from '../locales/interface';

const languages: Translations = { pt, en };

type LangState = {
  lang: LanguageCode;
  t: (path: string) => string;
  setLang: (l: LanguageCode) => void;
};

const getTranslation = (
  path: string,
  translations: TranslationObject
): string => {
  const keys = path.split('.');
  let current: unknown = translations;

  for (const key of keys) {
    if (current && typeof current === 'object' && !Array.isArray(current)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof current === 'string' ? current : path;
};

export const useLangueStore = create<LangState>((set, get) => ({
  lang: 'pt',
  t: (path: string) => {
    const currentTranslations = languages[get().lang];
    return getTranslation(path, currentTranslations);
  },
  setLang: (newLang: LanguageCode) => set({ lang: newLang }),
}));
