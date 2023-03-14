const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/test_task/" : "/",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.sass$/i,
          use: [
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    }
  }


})
