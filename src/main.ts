import * as core from '@actions/core'

const docs = ['Individuals and interactions over processes and tools']

async function run(): Promise<void> {
  try {
    core.info(docs[0])
    core.setOutput('passage', docs[0])
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
