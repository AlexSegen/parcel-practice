import axios from 'axios';

const RESOURCE_NAME = "/users";

export default {
  getAll() {
    return axios.get(process.env.API + RESOURCE_NAME);
  },
  updateStatus(id, data) {
    return axios.put(process.env.API + RESOURCE_NAME + "/" + id, data);
  }
};