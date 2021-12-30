import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import arCascader from '../src/index'

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(arCascader)

new Vue({
  render: h => h(App),
}).$mount('#app')
