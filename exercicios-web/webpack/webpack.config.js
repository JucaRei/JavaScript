const modoDev = process.env.NODE_ENV !== 'production'       // se estiver no modo deve , essa variavel é diferente de production
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

/**  NOTE 
 *  Mode - mode, no caso desenvolvimento
 *  entry - ponto de entrada
 *  output - saída
 *  vai ser colocada numa pasta public
 *  __dirname é uma constante de ambiente do node
 *  rules - onde vai os loaders
 */
module.exports = {
    // mode: 'development',
    mode: modoDev ? 'development' : 'production',  // se for verdadeiro é desenvolvimento , senão falso
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: "9000"
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,         // executa de forma mais rapido o possível (minificação)
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({     // NOTE  Função construtora
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,          //  /\.css$/
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>  / injetar o seu css via DOM
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif|webp)$/,
            use: ['file-loader']
        }]
    }
}