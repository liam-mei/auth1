const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session);

const dbConfig = require('./dbConfig');

module.exports = {
  name: "monkey", //sid
  secret: "this is a really good secret...", // should be a env var
  cookie: {
    maxAge: 1000 * 60 * 60, // in milliseconds
    secure: false, //true in production - access only over https
    httpOnly: true // can cookie be accessed using js
  },
  resave: false, // recreate session even if nothing has changed
  saveUninitialized: true, // GDPR compliance against setting cookies automatically should be false for production
  store: new KnexSessionStore({
    knex: dbConfig,
    createTable: true
  })
};