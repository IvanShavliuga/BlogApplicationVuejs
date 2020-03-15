new Vue({
	el : '#vue-app-one',
	data : {
		output : 'Your fav faood'
	},
	methods : {
		readRefs : function(){
			console.log(this.$refs);
			this.output = this.$refs.input.value
		}
	}
});