import axios from "axios"

const Axios = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/`,
    timeout: 5000,
  });

  export default Axios;