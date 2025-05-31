// Chat Logic
const db = firebase.firestore();
const userId = firebase.auth().currentUser ? firebase.auth().currentUser.uid : null;

// Function to send message
function sendMessage(message, recipient) {
  if (userId) {
    db.collection('chats').add({
      sender: userId,
      recipient: recipient,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
}

// Function to load chat history
function loadChat(recipient) {
  if (userId) {
    db.collection('chats')
      .where('sender', 'in', [userId, recipient])
      .where('recipient', 'in', [userId, recipient])
      .orderBy('timestamp')
      .onSnapshot(snapshot => {
        // Update chat UI here
        snapshot.forEach(doc => {
          console.log(doc.data().message);
        });
      });
  }
}

// Example: sendMessage("Hello!", "admin"); loadChat("admin");
