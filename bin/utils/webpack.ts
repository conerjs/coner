import { Stats, Compiler } from 'webpack'
import { printWarn, printErr, printSuc, printInfo } from './print'

export function compile(compiler: Compiler) {
  return new Promise<Stats | undefined>((resolve, reject) => {
    compiler.run((runErr, stats) => {
      compiler.close(closeErr => {
        if (runErr || closeErr) {
          reject(runErr ?? closeErr)
        } else {
          resolve(stats)
        }
      })
    })
  })
}

export function showStats(preMsg: string, stats?: Stats) {
  if (stats) {
    const info = stats.toJson({})
    const hasErrors = stats.hasErrors()
    const hasWarnings = stats.hasWarnings()
    if (hasErrors) {
      printWarn('Build Errors: ' + preMsg)
      printErr(info.errors)
      console.log()
    }
    if (hasWarnings) {
      printWarn('Build warnings: ' + preMsg)
      printWarn(String(info.warnings))
      console.log()
    }
    if (!hasWarnings && !hasErrors) {
      printSuc('Build successfully: ' + preMsg)
      printInfo(stats.toString({ preset: 'normal', colors: true }))
      console.log()
    }
  }
}
