import { createApp } from "vue";
import App from "./App.vue";
import { messaging } from "./utils/firebase-notification";

const app = createApp(App);
app.config.globalProperties.$messaging = messaging;
app.mount("#app");
