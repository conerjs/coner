import { resolve } from 'path'
import { Configuration } from 'webpack'
import { DIST_DIR, NM_DIR, DEV_DIR, SRC_DIR } from '../utils/path'

export function getWebpackConfig(): Configuration {
  return {
    mode: 'development',
    target: 'web',
    devServer: {
      static: [resolve(DEV_DIR, 'pub'), DIST_DIR]
    },
    entry: {
      dev: resolve(DEV_DIR, 'src/index.ts'),
      webus: {
        import: resolve(SRC_DIR, 'index.ts'),
        library: {
          name: 'webus',
          type: 'global'
        }
      }
    },
    output: {
      path: DIST_DIR,
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                compact: false,
                babelrc: false,
                sourceMap: true,
                configFile: false,
                cacheDirectory: true,
                cacheCompression: false,
                presets: [resolve(NM_DIR, '@babel/preset-env')],
                plugins: [resolve(NM_DIR, '@babel/plugin-transform-runtime')]
              }
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: false,
                compilerOptions: {
                  sourceMap: true,
                  skipLibCheck: true
                }
              }
            }
          ]
        }
      ]
    }
  }
}
