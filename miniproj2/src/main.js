import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App.vue";
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import router from "./router";

createApp(Header).use(router).mount("#header");
createApp(App).use(router).mount("#app");
createApp(Nav).use(router).mount("#nav");
createApp(Footer).use(router).mount("#footer");
