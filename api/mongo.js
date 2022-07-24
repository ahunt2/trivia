const { MongoClient } = require("mongodb");
const connectionString = process.env.MONGO_URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = client