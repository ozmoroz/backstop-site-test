import backstop from 'backstopjs'
import yargs from 'yargs'
import { makeConfig } from './backstop-config'

type BackstopCommand = 'reference' | 'test' | 'approve'

/**
 *Run backstop command
 * @param command
 */
async function runBackstop(
  command: 'reference' | 'test' | 'approve',
  siteUrl?: string,
): Promise<void> {
  const config = await makeConfig(siteUrl)
  return await backstop(command, { config })
}

/**
 * Parse command line
 * https://github.com/yargs/yargs/blob/master/docs/typescript.md
 */
const argv = yargs
  .usage('$0 <command> <url>')
  .command('reference <url>', 'make a reference screenshots of the site')
  .command('test <url>', 'test the site against the refenrence screenshots')
  .command('approve', 'approve the changes in the site')
  .help().argv

runBackstop(argv._[0] as BackstopCommand, argv.url as string).catch((err) => {
  console.log('BackstopJS error: ')
  console.log(err)
})
