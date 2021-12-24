module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      "module-resolver",
      {
        root: ["./src"],
        alias: [
          { "@actions": "./src/actions" },
          { "@api": "./src/api" },
          { "@assets": "./src/assets" },
          { "@utils": "./src/utils/" },
          { "@components": "./src/components" },
          { "@constants": "./src/constants" },
          { "@languages": "./src/languages" },
          { "@navigator": "./src/navigator" },
          { "@reducers": "./src/reducers" },
          { "@resources": "./src/resources" },
          { "@screens": "./src/screens" },
          { "@services": "./src/services" },
          { "@storage": "./src/storage" },
          { "@utils": "./src/utils" },
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
  };
};
