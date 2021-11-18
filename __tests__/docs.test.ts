import {
  Passage,
  passageSelector,
  langValidator,
  commentBuilder
} from '../src/passage'
import {beforeEach, expect, jest, test} from '@jest/globals'

const testPassage: Passage = {
  en: {
    text: 'test-passage-en',
    source: {
      title: 'test-source-title-en',
      url: 'test-source-url-en'
    }
  },
  ja: {
    text: 'test-passage-ja',
    source: {
      title: 'test-source-title-ja',
      url: 'test-source-url-ja'
    }
  }
}

test('passageSelector', () => {
  const passages = [testPassage]
  const result = passageSelector(passages)
  expect(result).toEqual(testPassage)
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
  const passage: Passage = {
    en: {
      text: 'test-passage-en',
      source: {
        title: 'test-source-title-en',
        url: 'test-source-url-en'
      }
    },
    ja: {
      text: 'test-passage-ja',
      source: {
        title: 'test-source-title-ja',
        url: 'test-source-url-ja'
      }
    }
  }
  const result = commentBuilder('en', passage)
  expect(result).toEqual(`> test-passage-en

from [test-source-title-en](test-source-url-en)`)
})
