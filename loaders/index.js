const http = require("http");
const db = require("./db");
const app = require("./server");

module.exports = () => {
  // Start server
  const server = http.createServer(app);
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Listening on ${port}...`);
  });

  // connect to DB
  db();
};
