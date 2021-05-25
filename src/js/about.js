<<<<<<< HEAD
//import Vue from "../../node_modules/vue/dist/vue";
// import Vue from "vue/dist/vue";
// 
// var app = new Vue({
//     el: '#app',
//     data: {
//         message: "Hello About"
//     }
// })
import Vue from "vue/dist/vue";

import HelloWorld from '../components/HelloWorld.vue'

new Vue({
	render: h => h(HelloWorld)
}).$mount('#app')

=======
// 默认为 runtime-only
// import Vue from "vue";
import Vue from "vue/dist/vue.esm";

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello About",
  },
});
>>>>>>> c24e629c834e003be38e72cdf7258abae3375e16
