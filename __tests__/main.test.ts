import {run} from '../src/run'
import * as process from 'process'
import {beforeEach, test} from '@jest/globals'
import * as github from '@actions/github'
import nock from 'nock'

beforeEach(() => {
  github.context.payload = {
    pull_request: {
      number: 1
    }
  }
})

test('No pull request', () => {
  github.context.payload = {}
  process.env['INPUT_LANG'] = 'en'
  run()
})

test('test runs (lang: en)', () => {
  process.env['INPUT_LANG'] = 'en'
  process.env['INPUT_REPO-TOKEN'] = 'dummy-token'
  process.env['GITHUB_REPOSITORY'] = 'testowner/testrepo'

  nock('https://api.github.com')
    .post('/repos/testowner/testrepo/issues/1/comments')
    .reply(200, {
      html_url: 'https://github.com/testowner/testrepo/issues/1#issuecomment-1'
    })

  run()
})

test('test runs (lang: ja)', () => {
  process.env['INPUT_LANG'] = 'ja'
  process.env['INPUT_REPO-TOKEN'] = 'dummy-token'
  process.env['GITHUB_REPOSITORY'] = 'testowner/testrepo'

  nock('https://api.github.com')
    .post('/repos/testowner/testrepo/issues/1/comments')
    .reply(200, {
      html_url: 'https://github.com/testowner/testrepo/issues/1#issuecomment-1'
    })

  run()
})
