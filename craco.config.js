const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            "@primary-color": "#58A621",
          },
          javascriptEnabled: true,
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "~": "./src/",
        },
      },
    },
  ],
};
