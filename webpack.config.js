const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      {
				test: /\.scss$/, use: ['vue-style-loader', 'css-loader', {
					loader: 'sass-loader',
					options: {
						sourceMap: true,
						additionalData: `@import "/src/assets/styles/_global.scss";`
					}
				}]
			},
      {
        test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
            loader: 'url-loader',
        }]
    },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
  ]
};