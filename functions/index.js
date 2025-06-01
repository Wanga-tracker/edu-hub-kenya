const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Example Cloud Function for AI (mock)
exports.askElijah = functions.https.onCall((data, context) => {
  const question = data.question;
  return { text: `Mock response to: ${question}` };
});
