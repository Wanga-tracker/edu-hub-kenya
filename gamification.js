// Gamification Logic
const db = firebase.firestore();
const userId = firebase.auth().currentUser ? firebase.auth().currentUser.uid : null;

// Function to add coins
function addCoins(amount) {
  if (userId) {
    db.collection('users').doc(userId).update({
      coins: firebase.firestore.FieldValue.increment(amount)
    });
  }
}

// Function to spend coins
function spendCoins(amount, feature) {
  if (userId) {
    db.collection('users').doc(userId).get().then(doc => {
      const currentCoins = doc.data().coins || 0;
      if (currentCoins >= amount) {
        db.collection('users').doc(userId).update({
          coins: currentCoins - amount
        });
        // Unlock feature logic here
        console.log(`Unlocked ${feature}`);
      } else {
        alert('Not enough coins!');
      }
    });
  }
}

// Example: addCoins(10); spendCoins(10, 'elijah');
