import Vue from 'vue'
import App from './App.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Servers from './Servers.vue'

Vue.component("my-Header",Header);
Vue.component("my-Footer",Footer);
Vue.component("my-Servers",Servers);

new Vue({
  el: '#app',
  render: h => h(App)
})
