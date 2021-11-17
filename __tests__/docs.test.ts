import {Doc, passageSelector, langValidator, commentBuilder} from '../src/docs'
import {beforeEach, expect, jest, test} from '@jest/globals'

const testDoc: Doc = {
  en: {
    passage: 'test-passage-en',
    source: {
      title: 'test-source-title-en',
      url: 'test-source-url-en'
    }
  },
  ja: {
    passage: 'test-passage-ja',
    source: {
      title: 'test-source-title-ja',
      url: 'test-source-url-ja'
    }
  }
}

test('passageSelector', () => {
  const docs = [testDoc]
  const result = passageSelector(docs)
  expect(result).toEqual(testDoc)
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

test('commentBuilder', () => {
  const doc: Doc = {
    en: {
      passage: 'test-passage-en',
      source: {
        title: 'test-source-title-en',
        url: 'test-source-url-en'
      }
    },
    ja: {
      passage: 'test-passage-ja',
      source: {
        title: 'test-source-title-ja',
        url: 'test-source-url-ja'
      }
    }
  }
  const result = commentBuilder('en', doc)
  expect(result).toEqual(`> test-passage-en

from [test-source-title-en](test-source-url-en)`)
})
