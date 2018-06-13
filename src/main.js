// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuesax from 'vuesax'
import VueFormWizard from 'vue-form-wizard'
import { DatePicker,TimePicker, TimeSelect } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'
import VeeValidate from 'vee-validate';
import * as VueGoogleMaps from 'vue2-google-maps'

// CSS
import 'vuesax/dist/vuesax.css'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

locale.use(lang);
Vue.use(VueFormWizard);
Vue.use(DatePicker);
Vue.use(TimePicker)
Vue.use(TimeSelect);
Vue.use(VeeValidate);

Vue.use(VueGoogleMaps, {
  load:{
    key:'AIzaSyCKVw3Fqxjd5k4f3us6bTypX2qNfH5iOFA',
    libraries : 'places'
  }
})

Vue.use(Vuesax, {
  theme : {
    colors:{
      primary:'#F03E41',
      success:'rgb(23, 201, 100)',
      danger:'rgb(242, 19, 93)',
      warning:'rgb(255, 130, 0)',
      dark:'#31373D'
    }
  }
})

Vue.config.silent = true

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

