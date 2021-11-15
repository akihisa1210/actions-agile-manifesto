const supportedLangs = ['en', 'ja'] as const

type Doc = {
  [key in typeof supportedLangs[number]]: string
}

const agileManifesto: Doc[] = [
  {
    en: 'Individuals and interactions over processes and tools',
    ja: 'プロセスやツールよりも個人と対話を'
  },
  {
    en: 'Working software over comprehensive documentation',
    ja: '包括的なドキュメントよりも動くソフトウェアを'
  },
  {
    en: 'Customer collaboration over contract negotiation',
    ja: '契約交渉よりも顧客との協調を'
  },
  {
    en: 'Responding to change over following a plan',
    ja: '計画に従うことよりも変化への対応を'
  }
]

export const passageSelector = (
  lang: typeof supportedLangs[number],
  docs: Doc[] = agileManifesto
): string => {
  return docs[Math.floor(Math.random() * docs.length)][lang]
}

export const langValidator = (
  inputLang: string
): inputLang is typeof supportedLangs[number] => {
  if (!supportedLangs.find(supportedLang => supportedLang === inputLang)) {
    throw new Error(`Unsupported language: ${inputLang}.
    Supported languages are: ${supportedLangs.map(l => {
      return l
    })}`)
  }
  return true
}
