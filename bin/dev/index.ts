import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'
import { getWebpackConfig } from './webpack.esm.dev.config'

void dev()

async function dev() {
  try {
    const webpackConfig = getWebpackConfig()
    const compiler = webpack(webpackConfig)
    const server = new webpackDevServer({ ...webpackConfig.devServer, open: true }, compiler)
    await server.start()
  } catch (err: unknown) {
    if (typeof err === 'object' && err !== null) {
      if ('details' in err) {
        console.error(err.details)
      }
    }
  }
}
