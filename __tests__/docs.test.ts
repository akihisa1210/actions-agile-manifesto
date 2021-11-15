import {Doc, passageSelector, langValidator} from '../src/docs'
import {beforeEach, expect, jest, test} from '@jest/globals'

test('passageSelector with en', () => {
  const docs: Doc[] = [{en: 'test-en', ja: 'test-ja'}]
  const result = passageSelector('en', docs)
  expect(result).toEqual('test-en')
})

test('passageSelector with ja', () => {
  const docs: Doc[] = [{en: 'test-en', ja: 'test-ja'}]
  const result = passageSelector('ja', docs)
  expect(result).toEqual('test-ja')
})

test('langValidator with supported lang', () => {
  const result = langValidator('en')
  expect(result).toBe(true)
})

test('langValidator with unsupported lang', () => {
  expect(() => langValidator('unsupported-lang'))
    .toThrow(`Unsupported language: unsupported-lang.
Supported languages are: en,ja`)
})
