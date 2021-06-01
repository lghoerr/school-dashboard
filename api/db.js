const firebase = require("firebase");
require("firebase/firestore");
const admin = require('firebase-admin')
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

module.exports = db
