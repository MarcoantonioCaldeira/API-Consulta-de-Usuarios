import axios from "axios";
const api = axios.create({
 baseURL: "http://localhost:9000/clientes",
});

api.interceptors.request.use(
    (config) => {
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2Njg2ODI1MzB9.bp8DtVjksv3j6gmd2jhmxh-uljuFQw0b8K2kYSW67oU";
      config.headers.Authorization = `Bearer ${token}`;
   
      return config;
    },
    async (error) => {
     
      const originalRequest = error.config;

      if(error?.response?.status === 401 &&
        !originalRequest?.__isRetryRequest){

        originalRequest.retry = true;
        
        const refreshToken = localStorage.getItem("refreshToken");
        if(!refreshToken){

          localStorage.clear();

          return (window.location.href = "/");
        }

        const response = await refresh(refreshToken);

        const data = {
          acessToken = response.token;
          refreshToken = response.refreshToken;
        };

        localStorage.setItem(JSON.stringify(data), "refreshToker");

        return api(originalRequest);
      }

      return Promise.reject(error);
    });

export default api;