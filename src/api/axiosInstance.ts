import axios from "axios"

const Axios = axios.create({
    baseURL: 'https://reqres.in/api/',
    timeout: 5000,
  });

  export default Axios;