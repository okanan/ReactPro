const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//modulo que contiene toda la configuracion
module.exports = {
  mode: 'development',
  entry: '/src/components/index.js', //la entrada es el archivo principal de js
  output: { //donde guardamos los archivos resultantes cuando se haga la combinacion
    path: path.resolve(__dirname, 'dist'), //direccion donde se guarda. Con el metodo resolve() damos la carpeta donde se guarda
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  resolve: { //resolver extensiones para el proyecto
    extensions: ['.js', '.jsx'] //indicamos las extensiones a resolver
  },
  module: { // modulo con las reglas del proyecto
    rules: [ 
      {
        test: /\.(js|jsx)$/, // permite identificar archivos js y jsx
        exclude: /node_modules/, //excluye node modules
        use: { 
          loader: "babel-loader" //  
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    }),
  ]
};

