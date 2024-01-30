import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");

if (import.meta.env.MODE === "production") {
  console.log("Running in production mode");
} else {
  console.log("Running in development mode");
}
