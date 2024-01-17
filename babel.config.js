module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "@babel/plugin-transform-react-jsx",
        {
          "pragma": "h" // Change this to your desired pragma
        }
      ]
    ]
  };
};
