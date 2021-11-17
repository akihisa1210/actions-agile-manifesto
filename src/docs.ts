const supportedLangs = ['en', 'ja'] as const

export type Doc = {
  [key in typeof supportedLangs[number]]: {
    passage: string
    source: {
      title: string
      url: string
    }
  }
}

const agileManifesto: Doc[] = [
  {
    en: {
      passage: 'Individuals and interactions over processes and tools',
      source: {
        title: 'Manifesto for Agile Software Development',
        url: 'https://agilemanifesto.org/'
      }
    },
    ja: {
      passage: 'プロセスやツールよりも個人と対話を',
      source: {
        title: 'アジャイルソフトウェア開発宣言',
        url: 'https://agilemanifesto.org/iso/ja/manifesto.html'
      }
    }
  },
  {
    en: {
      passage: 'Working software over comprehensive documentation',
      source: {
        title: 'Manifesto for Agile Software Development',
        url: 'https://agilemanifesto.org/'
      }
    },
    ja: {
      passage: '包括的なドキュメントよりも動くソフトウェアを',
      source: {
        title: 'アジャイルソフトウェア開発宣言',
        url: 'https://agilemanifesto.org/iso/ja/manifesto.html'
      }
    }
  },
  {
    en: {
      passage: 'Customer collaboration over contract negotiation',
      source: {
        title: 'Manifesto for Agile Software Development',
        url: 'https://agilemanifesto.org/'
      }
    },
    ja: {
      passage: '契約交渉よりも顧客との協調を',
      source: {
        title: 'アジャイルソフトウェア開発宣言',
        url: 'https://agilemanifesto.org/iso/ja/manifesto.html'
      }
    }
  },
  {
    en: {
      passage: 'Responding to change over following a plan',
      source: {
        title: 'Manifesto for Agile Software Development',
        url: 'https://agilemanifesto.org/'
      }
    },
    ja: {
      passage: '計画に従うことよりも変化への対応を',
      source: {
        title: 'アジャイルソフトウェア開発宣言',
        url: 'https://agilemanifesto.org/iso/ja/manifesto.html'
      }
    }
  }
]

export const passageSelector = (docs: Doc[] = agileManifesto): Doc => {
  return docs[Math.floor(Math.random() * docs.length)]
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

export const commentBuilder = (
  lang: typeof supportedLangs[number],
  doc: Doc
): string => {
  const passage = doc[lang]
  return `> ${passage.passage}

from [${passage.source.title}](${passage.source.url})`
}
