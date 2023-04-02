import webpack from 'webpack'
import { compile, showStats } from '../utils/webpack'
import { cjsProWebpackConfig } from './webpack.cjs.pro.config'
import { esmProWebpackConfig } from './webpack.esm.pro.config'

void build()

async function build() {
  try {
    const cjsProWebpack = webpack(cjsProWebpackConfig)
    const cjsProCompileRes = await compile(cjsProWebpack)
    showStats('CommonJS Production File', cjsProCompileRes)
    const esmProWebpack = webpack(esmProWebpackConfig)
    const esmProCompileRes = await compile(esmProWebpack)
    showStats('ESModule Production File', esmProCompileRes)
  } catch (err: unknown) {
    if (typeof err === 'object' && err !== null) {
      if ('details' in err) {
        console.error(err.details)
      }
    }
  }
}
