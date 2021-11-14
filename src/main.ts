import * as core from '@actions/core'

type Doc = {
  [index: string]: string
}

const docs: Doc[] = [
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

const supportedLangs = ['en', 'ja']

async function run(): Promise<void> {
  try {
    const lang: string = core.getInput('lang')
    if (!supportedLangs.includes(lang)) {
      core.setFailed(
        `Unsupported language: ${lang}.
Supported languages are: ${supportedLangs.map(l => {
          return l
        })}`
      )
    }

    const passage = docs[Math.floor(Math.random() * docs.length)][lang]
    core.info(passage)
    core.setOutput('passage', passage)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
