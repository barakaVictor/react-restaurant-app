import axios from 'axios'

const instance = axios.create({
    //baseURL: process.env.VUE_APP_API_URL,
    json: true
  });
  
  export default {
    async execute(method, resource, data) {
      return instance({
        method,
        url: resource,
        data
      }).then(req => {
        return req;
      });
    },

    getData(){
        return this.execute('get', './data.json')
    }
}