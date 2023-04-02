export function printInfo(msg: string) {
  msg && console.log('- ' + msg)
}

export function printSuc(msg: string) {
  msg && console.log('\u001b[32m' + '√ ' + msg + '\x1B[0m')
}

export function printWarn(msg: string) {
  msg && console.log('\u001b[33m' + '! ' + msg + '\x1B[0m')
}

export function printErr(err: unknown) {
  err && console.error(err)
}

export function printSucAndExit(msg: string, code = 0) {
  printSuc(msg)
  console.log()
  process.exit(code)
}

export function printWarnAndExit(msg: string, code = 0) {
  printWarn(msg)
  console.log()
  process.exit(code)
}

export function printErrAndExit(err: unknown, code = -1) {
  printErr(err)
  console.log()
  process.exit(code)
}
