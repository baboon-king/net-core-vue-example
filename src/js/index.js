<<<<<<< HEAD
import Vue from "vue/dist/vue";

import HelloWorld from '../components/HelloWorld.vue'

var app = new Vue({
	el: '#app',
	data: {
		message: "Hello Index"
	},
	// 注册该插件
	components: {
		HelloWorld
	}
})
=======
// 默认为 runtime-only
// import Vue from "vue";
import Vue from "vue/dist/vue.esm";
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Index",
  },
});
>>>>>>> c24e629c834e003be38e72cdf7258abae3375e16
