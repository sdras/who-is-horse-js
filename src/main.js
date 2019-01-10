import Vue from 'vue'
import App from './App.vue'

// Register a global custom directive called `v-focus`
Vue.directive('height', {
  // When the bound element is inserted into the DOM...
  inserted: function(el) {
    el.style.minHeight = `${window.outerHeight}px`
  }
})

Vue.directive('initscroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

const vue = new Vue({
  el: '#app',
  render: h => h(App)
})

window.BingMapReady = function() {
  vue.$root.$emit('/mapready')
}
