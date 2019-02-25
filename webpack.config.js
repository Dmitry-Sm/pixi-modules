const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    build: './src/js/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  performance: {
    hints: false
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        exclude: '/node_modules/',
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            // 'postcss-loader',
            "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: '/node_modules/',
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // отключить сжатие изображений совсем
              // bypassOnDebug: true, // отключить сжатие во время дебага
              // pngquant: {
              //   quality: '45-90',
              //   speed: 1
              // },
            },
          }
        ]
      },
      {
        test: /\.(frag|vert|glsl)$/,
        use: [
          { 
            loader: 'glsl-shader-loader'
          }
        ]
      }

  ]},
  devServer: {
    overlay: true
  }
}




if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}