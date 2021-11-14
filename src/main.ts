import * as core from '@actions/core'

const docs = [
  'Individuals and interactions over processes and tools',
  `Working software over comprehensive documentation`,
  `Customer collaboration over contract negotiation`,
  `Responding to change over following a plan`
]

async function run(): Promise<void> {
  try {
    const passage = docs[Math.floor(Math.random() * docs.length)]
    core.info(passage)
    core.setOutput('passage', passage)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
