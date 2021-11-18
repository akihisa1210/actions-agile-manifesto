import * as core from '@actions/core'
import * as github from '@actions/github'
import {commentBuilder, langValidator, passageSelector} from './passage'

export async function run(): Promise<void> {
  try {
    const inputLang: string = core.getInput('lang')
    if (!langValidator(inputLang)) {
      return
    }

    const passage = passageSelector()
    const comment = commentBuilder(inputLang, passage)

    core.info(passage[inputLang].text)
    core.setOutput('passage', passage[inputLang].text)

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
      body: comment
    })
    core.info(`comment url: ${res.data.html_url}`)
    core.setOutput('comment-url', res.data.html_url)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
