import Vue from "vue/dist/vue";

import HelloWorld from "../components/HelloWorld.vue";

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Index",
  },
  // 注册该插件
  components: {
    HelloWorld,
  },
});
