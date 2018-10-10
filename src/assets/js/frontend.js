import Vue from "vue/dist/vue.esm";

import usersService from "../services/users.service";

Vue.component("user-list", {
  template: `<div>
			  <p class="text-center">Users list</p>
                <ul class="list-group">
                  <i v-if="users.length < 1"> Users not found</i>
				  <li v-else class="list-group-item" v-for="(user, key, index) in users">
				  	<strong>{{ user.first_name }}</strong>  
				  	<a href="javascript:void(0)"
				  	class="badge float-right"
				  	:class="user.isActive ? 'badge-success' : 'badge-secondary'"
				  	v-text="user.isActive ? 'Active' : 'Inactive'"
				  	@click="changeStatus(key)"></a>
				  </li>
				</ul>
		 	</div>`,
  props: ["users"],
  methods: {
    changeStatus(key) {
      this.users[key].isActive = !this.users[key].isActive;

      let data = this.users[key];

      usersService.updateStatus(data.id, data).then(response => {
        this.$parent.getUsers();
      });
    }
  }
});

var app = new Vue({
  el: "#app",
  components: {
    //userList
  },
  data() {
    return {
      message: "Users app!",
      users: []
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      usersService.getAll().then(response => {
        this.users = response.data;
      });
    }
  }
});
