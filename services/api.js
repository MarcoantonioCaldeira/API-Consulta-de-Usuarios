import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:9000/clientes",
});

api.interceptors.request.use(
    (config) => {
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2Njg3NzE3NTZ9.PKrgVITOSYuk9YXyk4FO-BpINAv7g7ovI8wP2hIRUxM";
      config.headers.Authorization = `Bearer ${token}`;
   
      return config;
    }
);


export default api;