<template>
<div>
	isitLikeDarkSouls ? Enter the name of a game to find out how similiar it is to Dark Souls
	<br>
	<form id="submitGameForm" @submit.prevent="sendGameName">
	<p>
		<label>Enter Game Name</label>
		<br></br>
		<input type="text" v-model="gameName" placeholder="Search">
		<br></br>
		<button>Search</button>
	</p>
	</form>
	<br>
	<div id = "DisplayResponse">
		{{ response }}
	</div>

</div>
</template>

<script defer>
import axios from 'axios'
export default {

	data(){
		return {
		
			response: 'Is it like Darks souls lets find out lol',
			gameName: ''
		
		}
	},
	methods:{
	
		sendGameName(event){
		
			
			var qp = '?search=' + this.gameName + '&fields=*';

			console.log(this.gameName);
			
			var url = 'http://localhost:8081/games/' + this.gameName;
			
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
/*
import axios from 'axios';
import Vue from 'vue';

window.onload = function () {

	
	const response = new Vue({

		el: '#DisplayResponse',
		data:{
			response: 'Is it like Darks souls lets find out lol'
		}
	});

	const form = new Vue({
	  el: '#submitGameForm',
	  data: {
		gameName: ''
	  },
	  methods: {
		sendGameName: function(event){
			gameName = this.gameName;
			var qp = '?search=' + gameName + '&fields=*';

			console.log(gameName);
			
			var url = 'https://api-endpoint.igdb.com/games' + qp;
			
			axios.get(url, {
				headers: {
				  "user-key": "cbbad2bf9cf0dfd5b17311a1171202c0",
				   Accept: "application/json"
				}
			})
			.then(response => {
				response.responseText = response.data;
			})
			.catch(e => {
				console.log("error", e);
			});				
		}
	  }
	});
}
*/
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
