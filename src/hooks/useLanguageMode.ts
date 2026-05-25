import { useEffect, useState } from 'react'

export type LanguageMode = 'id' | 'en'

const STORAGE_KEY = 'simtech_language_mode'

function getInitialLanguage(): LanguageMode {
  const saved = window.localStorage.getItem(STORAGE_KEY)

  if (saved === 'id' || saved === 'en') {
    return saved
  }

  return 'id'
}

export function useLanguageMode() {
  const [language, setLanguage] = useState<LanguageMode>(getInitialLanguage)

  useEffect(() => {
    const syncLanguage = () => {
      setLanguage(getInitialLanguage())
    }

    window.addEventListener('storage', syncLanguage)
    window.addEventListener('simtech-language-change', syncLanguage)

    return () => {
      window.removeEventListener('storage', syncLanguage)
      window.removeEventListener('simtech-language-change', syncLanguage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const setLanguageMode = (next: LanguageMode) => {
    setLanguage(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    window.dispatchEvent(new Event('simtech-language-change'))
  }

  const toggleLanguage = () => {
    setLanguageMode(language === 'id' ? 'en' : 'id')
  }

  return {
    language,
    setLanguageMode,
    toggleLanguage,
  }
}
