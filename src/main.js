import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { createVuetify } from "vuetify";
import "vuetify/styles";

const vuetify = createVuetify();

createApp(App).use(router).use(vuetify).mount("#app");
