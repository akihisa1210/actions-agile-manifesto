import * as core from '@actions/core'
import * as github from '@actions/github'

const supportedLangs = ['en', 'ja'] as const

type Doc = {
  [key in typeof supportedLangs[number]]: string
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

const langValidator = (
  inputLang: string
): inputLang is typeof supportedLangs[number] => {
  return !!supportedLangs.find(supportedLang => supportedLang === inputLang)
}

async function run(): Promise<void> {
  try {
    const inputLang: string = core.getInput('lang')
    if (!langValidator(inputLang)) {
      core.setFailed(
        `Unsupported language: ${inputLang}.
Supported languages are: ${supportedLangs.map(l => {
          return l
        })}`
      )
      return
    }

    const passage = docs[Math.floor(Math.random() * docs.length)][inputLang]
    core.info(passage)
    core.setOutput('passage', passage)

    const context = github.context
    const pr = context.payload.pull_request
    if (!pr) {
      core.info('Comment was skipped because pull request does not exist.')
      return
    }
    const token = core.getInput('repo-token')
    const octokit = github.getOctokit(token)
    const res = await octokit.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: pr.number,
      body: passage
    })
    core.info(`comment url: ${res.data.html_url}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
