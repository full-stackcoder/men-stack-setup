const express = require("express");
var cors = require("cors");

function createServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(function (err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
      res
        .status(400)
        .json(
          "The server did not receive a valild JSON. Please try checking for syntax errors."
        );
    }
  });
  return app;
}

module.exports = createServer;
