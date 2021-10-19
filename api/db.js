const mongoose = require("mongoose");
const config = require("./config");

let { DATABASE, DATABASE_ATLAS, MONGODB_DB, DEPLOY } = config;

let MONGODB_URI = "";
if (DEPLOY === "docker") {
  MONGODB_URI = `mongodb://${DATABASE}/${MONGODB_DB}`;
} else {
  MONGODB_URI = DATABASE_ATLAS;
}

console.log(MONGODB_URI);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose;
