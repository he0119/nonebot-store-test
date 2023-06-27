import { createApp } from "vue";

import { createPinia } from "pinia";

import "highlight.js";
import "highlight.js/scss/github.scss";

import App from "./App.vue";
import "./scss/style.scss";
import "virtual:uno.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
