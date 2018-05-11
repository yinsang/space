const server = require("./server");
const router = require("./router");
server.start(router.route);
var a = () => {
  console.log();
};
