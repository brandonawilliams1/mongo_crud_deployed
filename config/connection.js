const { connect, connection } = require('mongoose');

const uri =
process.env.MONGODB_URI;

connect('mongodb://localhost/videosAndResponses', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
