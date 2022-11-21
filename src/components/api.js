import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:9000/clientes",
});

api.interceptors.request.use(
    (config) => {

   let token = Response($.token)

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },

  async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // Do something, call refreshToken() request for example;
        // return a request
        return axios_instance(config);
      }

      if (error.response.status === ANOTHER_STATUS_CODE) {
        // Do something 
        return Promise.reject(error.response.data);
      }
    }

    return Promise.reject(error);
  }
    
)

export default api;