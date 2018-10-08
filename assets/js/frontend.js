import Vue from 'vue/dist/vue.esm'
Vue.component('user-list', {
  template: `<div>
			  <p>Users list</p>
				<ul class="list-group">
				  <li class="list-group-item" v-for="(user, key, index) in users">
				  	User <strong>{{ user.name }}</strong> is 
				  	<a href="javascript:void(0)"
				  	class="badge"
				  	:class="user.isActive ? 'badge-success' : 'badge-secondary'"
				  	v-text="user.isActive ? 'Active' : 'Inactive'"
				  	@click="changeStatus(key)"></a>
				  </li>
				</ul>
		 	</div>`,
   props: ['users'],
   methods:{
	changeStatus: function(key){
		this.users[key].isActive = !this.users[key].isActive
	}
   }
});

var app = new Vue({
	el: '#app',
	components:{
		//userList
	},
	data: {
		message: 'Users app!',
		users: [
		{
			id: 1,
			name:'Alejandro',
			isActive: 1
		},
		{
			id: 2,
			name:'Jose',
			isActive: 1
		},
		{
			id: 3,
			name:'Daniel',
			isActive: 0
		},
		{
			id: 4,
			name:'Luis',
			isActive: 1
		}
		]
	},
	methods:{
		// changeStatus: function(key){
		// 	console.log(key)
		// 	this.users[key].isActive = !this.users[key].isActive
		// }
	}
});