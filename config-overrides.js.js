module.exports = config => {
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [
      require('postcss-nested')
    ]
  });

  return config;
};