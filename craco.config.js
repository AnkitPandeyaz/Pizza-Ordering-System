// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // You can leave out any polyfill for crypto here
        return webpackConfig;
      },
    },
  };
  