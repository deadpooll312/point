const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/rest/",
    createProxyMiddleware({
      target: "https://arm-park.gost-group.com/",
      changeOrigin: true,
    })
  );
};
