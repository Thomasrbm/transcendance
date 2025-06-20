// locales/server.ts
import { createI18nServer } from 'next-international/server'

export const locales = ['en', 'fr', 'es', 'us'] as const
export type Locale = (typeof locales)[number]

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import('./en'),
  fr: () => import('./fr'),
  es: () => import('./es'),
  us: () => import('./us'),
})
