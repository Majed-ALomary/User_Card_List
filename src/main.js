import Vue from 'vue'
import App from './App.vue'

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    // key: 'AIzaSyAiwEipeqi9FqDg39wjne3ZsLf5pzZwIME', //kh
    key: 'AIzaSyBXS2PJgTzrNLEppaBEseBcQu91e2RyYEA',
    libraries: 'places', // This is optional, depending on your requirements
  },
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
