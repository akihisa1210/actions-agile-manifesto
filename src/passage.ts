const supportedLangs = ['en', 'ja'] as const

export type Passage = {
  [key in typeof supportedLangs[number]]: {
    text: string
    source: {
      title: string
      url: string
    }
  }
}

const agileManifesto: Passage[] = [
  {
    en: {
      text: 'Individuals and interactions over processes and tools',
      source: {
        title: 'Manifesto for Agile Software Development',
        url: 'https://agilemanifesto.org/'
      }
    },
    ja: {
      text: 'プロセスやツールよりも個人と対話を',
      source: {
        title: 'アジャイルソフトウェア開発宣言',
        url: 'https://agilemanifesto.org/iso/ja/manifesto.html'
      }
    }
  },
  {
    en: {
      text: 'Working software over comprehensive documentation',
      source: {
        title: 'Manifesto for Agile Software Development',
        url: 'https://agilemanifesto.org/'
      }
    },
    ja: {
      text: '包括的なドキュメントよりも動くソフトウェアを',
      source: {
        title: 'アジャイルソフトウェア開発宣言',
        url: 'https://agilemanifesto.org/iso/ja/manifesto.html'
      }
    }
  },
  {
    en: {
      text: 'Customer collaboration over contract negotiation',
      source: {
        title: 'Manifesto for Agile Software Development',
        url: 'https://agilemanifesto.org/'
      }
    },
    ja: {
      text: '契約交渉よりも顧客との協調を',
      source: {
        title: 'アジャイルソフトウェア開発宣言',
        url: 'https://agilemanifesto.org/iso/ja/manifesto.html'
      }
    }
  },
  {
    en: {
      text: 'Responding to change over following a plan',
      source: {
        title: 'Manifesto for Agile Software Development',
        url: 'https://agilemanifesto.org/'
      }
    },
    ja: {
      text: '計画に従うことよりも変化への対応を',
      source: {
        title: 'アジャイルソフトウェア開発宣言',
        url: 'https://agilemanifesto.org/iso/ja/manifesto.html'
      }
    }
  }
]

export const passageSelector = (
  passages: Passage[] = agileManifesto
): Passage => {
  return passages[Math.floor(Math.random() * passages.length)]
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
  passage: Passage
): string => {
  const passageInLang = passage[lang]
  return `> ${passageInLang.text}

from [${passageInLang.source.title}](${passageInLang.source.url})`
}
