import Vue from 'vue/dist/vue.esm'

import usersService from '../services/users.service';

Vue.component('user-list', {
  template: `<div>
			  <p>Users list</p>
                <ul class="list-group">
                  <i v-if="users.length < 1"> Users not found</i>
				  <li v-else class="list-group-item" v-for="(user, key, index) in users">
				  	User <strong>{{ user.first_name }}</strong> is 
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
		users: []
    },
    created: function () {
        this.getUsers();
    },
	methods:{
        getUsers(){
            usersService.getAll().then((response) => {
                this.users = response.data;
            });
        }
    }
});