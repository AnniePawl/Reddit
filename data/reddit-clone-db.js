/* MONGOOSE CONNECTION */
const mongoose = require("mongoose");
assert = require("assert");

const url = "mongodb://localhost/reddit-clone-db";
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/reddit-clone-db",
  { useNewUrlParser: true }
);
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;

