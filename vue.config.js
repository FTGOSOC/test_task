const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

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
