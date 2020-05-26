const {createProxyMiddleware} = require("http-proxy-middleware");

let target;
if (process.env.REACT_APP_MODE === "dev") {
  target = "https://arm-park.gost-group.com/";
} else if (process.env.REACT_APP_MODE === "preprod") {
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
