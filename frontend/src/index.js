import * as Vue from 'vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify';

const app = Vue.createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);

app.mount('#app');