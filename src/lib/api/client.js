import axios from "axios";

const client = axios.create();

// client.defaults.baseURL = 'http://3.37.197.58:80';

// axios.intercepter.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// )

export default client;