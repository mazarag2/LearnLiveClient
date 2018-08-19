<template>
<body>
<div id = "app" class = "jumbotron">
	<h1 class = "display-4">isitLikeDarkSouls ? Enter the name of a game to find out how similiar it is to Dark Souls</h1>
	<br>
	<form class = "d-flex justify-content-center" id="submitGameForm" @submit.prevent="sendGameName">
		<p>
			<label>Enter Game Name</label>
			<br></br>
			<input type="text" v-model="gameName" placeholder="Search">
			<button type="button" class="btn btn-outline-primary" v-on:click="sendGameName()">Search</button>
		</p>
	</form>
	<br>
	<div class = "d-flex justify-content-center" id = "DisplayResponse">
		{{ response }}
	</div>

</div>
</body>
</template>

<script defer>
import axios from 'axios'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {

	data(){
		return {
		
			response: 'Is it like Darks souls lets find out lol',
			gameName: ''
		
		}
	},
	methods:{
	
		sendGameName(){
		
			
			console.log(this.gameName);
			
			var url = process.env.VUE_APP_PROD_URL + '/games/' + this.gameName;
			
			console.log(url);
			
			axios.get(url,{
			
				headers:{
					Accept: "text/html",
					"Access-Control-Allow-Origin": "http://localhost:8081"
				}
			}
			)
			.then(response => {
				this.response = response.data;
			})
			.catch(e => {
				console.log("error", e);
			});				
		
		}
	
	
	}

}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
