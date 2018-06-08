// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuesax from 'vuesax'
import VueFormWizard from 'vue-form-wizard'
import { DatePicker, TimeSelect } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'
import VeeValidate from 'vee-validate';

// CSS
import 'vuesax/dist/vuesax.css'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'


Vue.config.productionTip = false;
locale.use(lang);
Vue.use(VueFormWizard);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(VeeValidate);


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


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
