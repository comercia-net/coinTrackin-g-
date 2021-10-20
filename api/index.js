const serverless = require("serverless-http");
const app = require("./server");
const { DEPLOY } = require("./config");

if (DEPLOY !== "aws") {
  app.listen(app.get("port"), () => {
    console.log(`Server on port${app.get("port")}`);
  });
}

module.exports.handler = serverless(app);
