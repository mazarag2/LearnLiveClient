import Vue from 'vue'
import App from './App.vue'
//import axios from 'axios'
const app = new Vue({
  el: '#app',
  render: h => h(App),
  components: { App }
})
/*
window.onload = function () {
	new Vue({
	  el: '#submitGameForm',
	  methods:{
		  
		  sendGameName : function(event){
			  
			  
			  
			  
			  
		  }
	  }
	})
}*/