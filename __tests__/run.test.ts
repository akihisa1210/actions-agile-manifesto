import * as process from 'process'
import * as core from '@actions/core'
import * as github from '@actions/github'
import {run} from '../src/run'
import {beforeEach, expect, jest, test} from '@jest/globals'
import nock from 'nock'

jest.mock('../src/docs', () => ({
  __esModule: true,
  ...(jest.requireActual('../src/docs') as {}),
  passageSelector: jest.fn().mockReturnValue('test-passage')
}))

beforeEach(() => {
  github.context.payload = {
    pull_request: {
      number: 1
    }
  }
})

test('No pull request', async () => {
  github.context.payload = {}
  process.env['INPUT_LANG'] = 'en'

  const setOutputMock = jest.spyOn(core, 'setOutput')

  await run()

  expect(setOutputMock).toHaveBeenCalledTimes(1)
  expect(setOutputMock).toHaveBeenCalledWith('passage', 'test-passage')
})

test('test runs (lang: en)', async () => {
  process.env['INPUT_LANG'] = 'en'
  process.env['INPUT_REPO-TOKEN'] = 'dummy-token'
  process.env['GITHUB_REPOSITORY'] = 'testowner/testrepo'

  nock('https://api.github.com')
    .post('/repos/testowner/testrepo/issues/1/comments')
    .reply(200, {
      html_url: 'https://github.com/testowner/testrepo/issues/1#issuecomment-1'
    })

  const setOutputMock = jest.spyOn(core, 'setOutput')

  await run()

  expect(setOutputMock).toHaveBeenCalledTimes(2)
  expect(setOutputMock).nthCalledWith(1, 'passage', 'test-passage')
  expect(setOutputMock).lastCalledWith(
    'comment-url',
    'https://github.com/testowner/testrepo/issues/1#issuecomment-1'
  )
})

test('test runs (lang: ja)', async () => {
  process.env['INPUT_LANG'] = 'ja'
  process.env['INPUT_REPO-TOKEN'] = 'dummy-token'
  process.env['GITHUB_REPOSITORY'] = 'testowner/testrepo'

  nock('https://api.github.com')
    .post('/repos/testowner/testrepo/issues/1/comments')
    .reply(200, {
      html_url: 'https://github.com/testowner/testrepo/issues/1#issuecomment-1'
    })

  const setOutputMock = jest.spyOn(core, 'setOutput')

  await run()

  expect(setOutputMock).toHaveBeenCalledTimes(2)
  expect(setOutputMock).nthCalledWith(1, 'passage', 'test-passage')
  expect(setOutputMock).lastCalledWith(
    'comment-url',
    'https://github.com/testowner/testrepo/issues/1#issuecomment-1'
  )
})
