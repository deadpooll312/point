const {createProxyMiddleware} = require("http-proxy-middleware");

let target;
if (process.env.NODE_ENV === "development") {
  target = "https://arm-park.gost-group.com/";
} else if (process.env.NODE_ENV === "preprod") {
  target = "https://park-mmonitor-test.mos.ru";
}

module.exports = function (app) {
  app.use(
    "/rest/",
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};
