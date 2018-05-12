const http = require("http");
const url = require("url");
const start = route => {
  const onRequest = (req, res) => {
    // const URL = url.URL; const reqUrl = new URL(req.url)
    const reqUrl = url.parse(req.url);
    route(reqUrl.pathname);
    // const pathname = reqUrl.pathname; console.log(`request received from
    // ${reqUrl}`);
    res.writeHead(200, { "Content-type": "text-plain" });
    res.write("hello nodejs");
    res.end();
  };
  http.createServer(onRequest).listen(8898);
  console.log("server start");
};
exports.start = start;
