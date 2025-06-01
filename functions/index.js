// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { genkit } = require('genkit');
const { gemini15Flash, googleAI } = require('@genkit-ai/googleai');

admin.initializeApp();

// Configure Genkit with Gemini API
const ai = genkit({
  plugins: [googleAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY })],
  model: gemini15Flash
});

// Cloud Function to handle Elijah AI requests
exports.askElijah = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated.');
  }
  const question = data.question;
  try {
    const { text } = await ai.generate(`Hello! Answer as Elijah: ${question}`);
    return { text };
  } catch (error) {
    throw new functions.https.HttpsError('internal', 'Error generating response');
  }
});

// Cloud Function to handle Wanga career plans
exports.getWangaPlan = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated.');
  }
  const goal = data.goal;
  try {
    const { text } = await ai.generate(`Provide a career plan for ${goal}`);
    return { steps: text.split('\n').filter(line => line.trim()) };
  } catch (error) {
    throw new functions.https.HttpsError('internal', 'Error generating career plan');
  }
});

// Cloud Function to handle Emma talent strategies
exports.getEmmaStrategy = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated.');
  }
  const talent = data.talent;
  try {
    const { text } = await ai.generate(`Provide a talent strategy for ${talent}`);
    return { tasks: text.split('\n').filter(line => line.trim()) };
  } catch (error) {
    throw new functions.https.HttpsError('internal', 'Error generating talent strategy');
  }
});
