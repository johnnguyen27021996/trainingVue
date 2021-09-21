/* eslint-disable no-undef */
var url = "/";
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url == "/" && "focus" in client) return client.focus();
        }
        return clients.openWindow && clients.openWindow(url);
      })
  );
});

importScripts(
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js"
);

var firebaseConfig = {
  apiKey: "AIzaSyD9ohPcHq7OpYidt837hBW5XQkPguwGjNY",
  authDomain: "place-api-281010.firebaseapp.com",
  projectId: "place-api-281010",
  messagingSenderId: "257775134552",
  appId: "1:257775134552:web:6462a5706c0a4e5640a72d",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(self.registration.getNotifications());
  const promiseChain = self.registration.getNotifications()
  .then(notifications => {
    if(notifications.length > 1) {
      notifications[0].close();
    }
    let currentNotification;
  
    for(let i = 0; i < notifications.length; i++) {
      if (notifications[i].data &&
        notifications[i].data.id === 2801) {
        currentNotification = notifications[i];
      }
    }
    return currentNotification;
  }).then((currentNotification) => {
    let notificationTitle;
    const options = {
      icon: "http://localhost:8080/logo.png",
    }
  
    if (currentNotification) {
      // We have an open notification, let's do something with it.
      const messageCount = currentNotification.data.id + 1;
  
      options.body = `You have ${messageCount} new messages from.`;
      options.data = {
        userName: userName,
        newMessageCount: messageCount
      };
      notificationTitle = `New Messages from`;
  
      // Remember to close the old notification.
      currentNotification.close();
    } else {
      options.body = 'body';
      notificationTitle = `New Message from`;
    }
  
    return registration.showNotification(
      notificationTitle,
      options
    );
  });
  // const notification = payload.data;
  // url = notification.url;
  // const notificationTitle = notification.title;
  // const notificationOptions = {
  //   body: notification.body,
  //   icon: "http://localhost:8080/logo.png",
  // };
  // return self.registration.showNotification(
  //   notificationTitle,
  //   notificationOptions
  // );
});
