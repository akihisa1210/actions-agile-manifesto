import * as core from '@actions/core'
import * as github from '@actions/github'
import {langValidator, passageSelector} from './docs'

export async function run(): Promise<void> {
  try {
    const inputLang: string = core.getInput('lang')
    if (!langValidator(inputLang)) {
      return
    }

    const passage = passageSelector(inputLang)
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
    core.setOutput('comment-url', res.data.html_url)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
