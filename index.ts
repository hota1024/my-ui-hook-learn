import { withUiHook } from '@vercel/integration-utils'

let count = 0
console.log('index.ts')

export default withUiHook(async () => {
  count += 1
  console.log('count update')

  return `
    <Page>
      <P>Counter: ${count}</P>
      <Button>Count Me</Button>
    </Page>
  `
})
