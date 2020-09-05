import { withUiHook } from '@vercel/integration-utils'

let count = 0
console.log('module loaded')

export default withUiHook(async ({ payload }) => {
  console.log('count update')
  console.log({ payload })
  count += 1

  return `
    <Page>
      <P>Counter: ${count}</P>
      <Button>Count Me</Button>
    </Page>
  `
})
