const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: [resolve(__dirname, "src", "index.tsx")],
  mode: isDevelopment ? "development" : "production",
  output: {
    path: resolve(__dirname, "build"),
    publicPath: "/",
    filename: isDevelopment ? "[name].js" : "[name].[hash].js"
  },
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: "source-map-loader",
        enforce: "pre"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: !isDevelopment }
          }
        ]
      },
      {
        test: /\.css$/i,
        //exclude: /\.module.css$/,
        loader: "css-loader",
        options: {
          import: true
        }
      },
      {
        test: /\.module.css$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /\.module.less$/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },

      {
        test: /\.module.less$/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|eot|wav|mp3)$/i,
        loader: "file-loader"
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      }
    ]
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      "less",
      ".gif",
      ".png",
      ".jpg",
      ".jpeg",
      ".svg",
      ".wav"
    ],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  devServer: {
    historyApiFallback: true,
    //port: 3000,
    https: true,
    proxy: {
      "/ta/api": {
        //target: "http://localhost:4400"
        //changeOrigin: true
      }
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
    })
  ]
};

console.log(`Running in ${isDevelopment ? "Development" : "production"} Mode`);
