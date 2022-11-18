import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:9000/clientes",
});

api.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
  },
    
);


const instance = axios.create();

axios.interceptors.request.use(async (config) => {
    if (token && refreshToken) {
        const data = JSON.parse(atob(token.split('.')[1]));
        const time = Math.floor(new Date().getTime() / 1000);
        if (data.exp < time) {
             instance.defaults.headers.common["Authorization"] = `Bearer ${refreshToken}`;
             const { data } = await instance.get(SERVER.API_ROOT + '/tokens/refresh');
             if (data?.AccessToken) localStorage.setItem(config.AUTH_TOKEN, data.AccessToken)
                else localStorage.clear();
            }
     return config;
  }
})

export default api;