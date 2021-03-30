const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://ismailalabou:ouhY5iSFjUd2guFs@cluster0.s2lzm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
