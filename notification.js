// Notification Logic
const messaging = firebase.messaging();

// Request permission for notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');
}).catch(err => {
  console.log('Unable to get permission for notifications:', err);
});

// Handle incoming notifications
messaging.onMessage((payload) => {
  const notificationBanner = document.getElementById('notification-banner');
  notificationBanner.textContent = payload.notification.body;
  notificationBanner.style.display = 'block';
  setTimeout(() => {
    notificationBanner.style.display = 'none';
  }, 10000); // Hide after 10 seconds
});
