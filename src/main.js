import Vue from 'vue'
import App from './App.vue'
import './main.css'
import FunctionalCalendar from 'vue-functional-calendar'

Vue.use(FunctionalCalendar, {
  dayNames: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
