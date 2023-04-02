import { resolve } from 'path'
import { Configuration } from 'webpack'
import { DIST_DIR, NM_DIR, SRC_DIR } from '../utils/path'

export const cjsProWebpackConfig: Configuration = {
  mode: 'production',
  target: 'node',
  devtool: 'source-map',
  entry: {
    webus: {
      import: resolve(SRC_DIR, 'index.ts'),
      library: {
        name: 'webus',
        type: 'commonjs2'
      }
    }
  },
  output: {
    path: DIST_DIR,
    filename: '[name].cjs.js',
    sourceMapFilename: '[name].cjs.js.map'
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
