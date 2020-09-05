import { withUiHook } from '@vercel/integration-utils'

let count = 0

export default withUiHook(async () => {
  count += 1

  return `
    <Page>
      <P>Counter: ${count}</P>
      <Button>Count Me</Button>
    </Page>
  `
})
