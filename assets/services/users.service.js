/* let users = [
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
]; 

module.exports = users


*/

import axios from 'axios';

const RESOURCE_NAME = "/users";

export default {
  getAll() {
    return axios.get(process.env.API + RESOURCE_NAME);
  }
};