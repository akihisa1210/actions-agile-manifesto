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
  },
  {
    en: {
      text: 'Make People Awesome',
      source: {
        title: 'Modern Agile',
        url: 'https://modernagile.org/'
      }
    },
    ja: {
      text: '人々を最高に輝かせる',
      source: {
        title: 'Modern Agile',
        url: 'https://agilemanifesto.org/iso/ja/manifesto.html'
      }
    }
  },
  {
    en: {
      text: 'Make Safety a Prerequisite',
      source: {
        title: 'Modern Agile',
        url: 'https://modernagile.org/'
      }
    },
    ja: {
      text: '安全を必須条件にする',
      source: {
        title: 'Modern Agile',
        url: 'https://agilemanifesto.org/iso/ja/manifesto.html'
      }
    }
  },
  {
    en: {
      text: 'Experiment & Learn Rapidly',
      source: {
        title: 'Modern Agile',
        url: 'https://modernagile.org/'
      }
    },
    ja: {
      text: '高速に実験＆学習する',
      source: {
        title: 'Modern Agile',
        url: 'https://agilemanifesto.org/iso/ja/manifesto.html'
      }
    }
  },
  {
    en: {
      text: 'Deliver Value Continuously',
      source: {
        title: 'Modern Agile',
        url: 'https://modernagile.org/'
      }
    },
    ja: {
      text: '継続的に価値を届ける',
      source: {
        title: 'Modern Agile',
        url: 'https://agilemanifesto.org/iso/ja/manifesto.html'
      }
    }
  },
  {
    en: {
      text: 'Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.',
      source: {
        title: 'Principles behind the Agile Manifesto',
        url: 'https://agilemanifesto.org/principles.html'
      }
    },
    ja: {
      text: '顧客満足を最優先し、価値のあるソフトウェアを早く継続的に提供します。',
      source: {
        title: 'アジャイル宣言の背後にある原則',
        url: 'https://agilemanifesto.org/iso/ja/principles.html'
      }
    }
  },
  {
    en: {
      text: "Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.",
      source: {
        title: 'Principles behind the Agile Manifesto',
        url: 'https://agilemanifesto.org/principles.html'
      }
    },
    ja: {
      text: '要求の変更はたとえ開発の後期であっても歓迎します。変化を味方につけることによって、お客様の競争力を引き上げます。',
      source: {
        title: 'アジャイル宣言の背後にある原則',
        url: 'https://agilemanifesto.org/iso/ja/principles.html'
      }
    }
  },
  {
    en: {
      text: 'Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.',
      source: {
        title: 'Principles behind the Agile Manifesto',
        url: 'https://agilemanifesto.org/principles.html'
      }
    },
    ja: {
      text: '動くソフトウェアを、2-3週間から2-3ヶ月というできるだけ短い時間間隔でリリースします。',
      source: {
        title: 'アジャイル宣言の背後にある原則',
        url: 'https://agilemanifesto.org/iso/ja/principles.html'
      }
    }
  },
  {
    en: {
      text: 'Business people and developers must work together daily throughout the project.',
      source: {
        title: 'Principles behind the Agile Manifesto',
        url: 'https://agilemanifesto.org/principles.html'
      }
    },
    ja: {
      text: 'ビジネス側の人と開発者は、プロジェクトを通して日々一緒に働かなければなりません。',
      source: {
        title: 'アジャイル宣言の背後にある原則',
        url: 'https://agilemanifesto.org/iso/ja/principles.html'
      }
    }
  },
  {
    en: {
      text: 'Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.',
      source: {
        title: 'Principles behind the Agile Manifesto',
        url: 'https://agilemanifesto.org/principles.html'
      }
    },
    ja: {
      text: '意欲に満ちた人々を集めてプロジェクトを構成します。環境と支援を与え仕事が無事終わるまで彼らを信頼します。',
      source: {
        title: 'アジャイル宣言の背後にある原則',
        url: 'https://agilemanifesto.org/iso/ja/principles.html'
      }
    }
  },
  {
    en: {
      text: 'The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.',
      source: {
        title: 'Principles behind the Agile Manifesto',
        url: 'https://agilemanifesto.org/principles.html'
      }
    },
    ja: {
      text: '情報を伝えるもっとも効率的で効果的な方法はフェイス・トゥ・フェイスで話をすることです。',
      source: {
        title: 'アジャイル宣言の背後にある原則',
        url: 'https://agilemanifesto.org/iso/ja/principles.html'
      }
    }
  },
  {
    en: {
      text: 'Working software is the primary measure of progress.',
      source: {
        title: 'Principles behind the Agile Manifesto',
        url: 'https://agilemanifesto.org/principles.html'
      }
    },
    ja: {
      text: '動くソフトウェアこそが進捗の最も重要な尺度です。',
      source: {
        title: 'アジャイル宣言の背後にある原則',
        url: 'https://agilemanifesto.org/iso/ja/principles.html'
      }
    }
  },
  {
    en: {
      text: 'Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.',
      source: {
        title: 'Principles behind the Agile Manifesto',
        url: 'https://agilemanifesto.org/principles.html'
      }
    },
    ja: {
      text: 'アジャイル･プロセスは持続可能な開発を促進します。一定のペースを継続的に維持できるようにしなければなりません。',
      source: {
        title: 'アジャイル宣言の背後にある原則',
        url: 'https://agilemanifesto.org/iso/ja/principles.html'
      }
    }
  },
  {
    en: {
      text: 'Continuous attention to technical excellence and good design enhances agility.',
      source: {
        title: 'Principles behind the Agile Manifesto',
        url: 'https://agilemanifesto.org/principles.html'
      }
    },
    ja: {
      text: '技術的卓越性と優れた設計に対する不断の注意が機敏さを高めます。',
      source: {
        title: 'アジャイル宣言の背後にある原則',
        url: 'https://agilemanifesto.org/iso/ja/principles.html'
      }
    }
  },
  {
    en: {
      text: 'Simplicity--the art of maximizing the amount of work not done--is essential.',
      source: {
        title: 'Principles behind the Agile Manifesto',
        url: 'https://agilemanifesto.org/principles.html'
      }
    },
    ja: {
      text: 'シンプルさ（ムダなく作れる量を最大限にすること）が本質です。',
      source: {
        title: 'アジャイル宣言の背後にある原則',
        url: 'https://agilemanifesto.org/iso/ja/principles.html'
      }
    }
  },
  {
    en: {
      text: 'The best architectures, requirements, and designs emerge from self-organizing teams.',
      source: {
        title: 'Principles behind the Agile Manifesto',
        url: 'https://agilemanifesto.org/principles.html'
      }
    },
    ja: {
      text: '最良のアーキテクチャ・要求・設計は、自己組織的なチームから生み出されます。',
      source: {
        title: 'アジャイル宣言の背後にある原則',
        url: 'https://agilemanifesto.org/iso/ja/principles.html'
      }
    }
  },
  {
    en: {
      text: 'At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.',
      source: {
        title: 'Principles behind the Agile Manifesto',
        url: 'https://agilemanifesto.org/principles.html'
      }
    },
    ja: {
      text: 'チームがもっと効率を高めることができるかを定期的に振り返り、それに基づいて自分たちのやり方を最適に調整します。',
      source: {
        title: 'アジャイル宣言の背後にある原則',
        url: 'https://agilemanifesto.org/iso/ja/principles.html'
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
