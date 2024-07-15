module.exports = function override(config, env) {
    // outras configurações
    config.devServer = {
      ...config.devServer,
      allowedHosts: [
        '.ngrok.io',
      ],
    };
    return config;
  };
  