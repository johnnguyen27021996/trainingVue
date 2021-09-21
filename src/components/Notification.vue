<template>
  <button @click="send()">Send</button>
</template>

<script>
import { getToken, onMessage } from "firebase/messaging";
export default {
  name: "Notification",
  data() {
    return {
      payload: undefined,
    };
  },
  created() {
        getToken(this.$messaging, {
          vapidKey:
            "BG7gTIYdy0DJGeWIhJByEphLZSm240NwpyRpEiapW2WWSzLqMVtUUlYbVac9c4urPYWbcGQ1TGJC6K5db1Py1MU",
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log(currentToken);
            } else {
              // Show permission request UI
              console.log(
                "No registration token available. Request permission to generate one."
              );
              // ...
            }
          })
          .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // ...
          });
    onMessage(this.$messaging, (payload) => {
      console.log("Message received. ", payload);
    });
  },
  methods: {
    send() {
      let body = {
        to: "es5F15gumUhruFah9odhvb:APA91bGvjFgzoB_5GSaHWdcJuZqIvWQx3hfPs-7g_Uw8kHjVtxTdE7IJtUIX6zUUVAIg-Bwe35LfxrZmuezez1o7Ty3ng4FcfFkjQ4nmrtBYQXIz1L1cHGqwBSXgZJpwLE7nrXB1PcKR",
        notification: {},
        data: {
          title: "Title",
          body: "This is body",
          url: "/drivers",
        },
      };
      let options = {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "key=AAAAPASYZ1g:APA91bFiXZ18Mr0kQRiJl7_2cLHvRwASr_S_n71Qm7VIuF0ounFZA-CO-eKku9avHHqZOZo3i9QPz-MOA_8pFebuyXm7oHtKdfCGindDmhWKmcB9aoQviZE22dFTdcDeWEYuJZgtJT_R",
        }),
        method: "POST",
        body: JSON.stringify(body)
      };
      fetch('https://fcm.googleapis.com/fcm/send', options).then(res => {
        console.log(res);
      })
    },
  },
};
</script>