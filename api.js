import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:9000/auth",
});

api.interceptors.request.use(
    (config) => {

      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJULkkuIEdlc3RvciIsInN1YiI6IjUwNWJhNDJlYTQ1NTUzNzYwNzkwMjk4NDc4ZDJmYmY0ZDA3OTFhMDIiLCJleHAiOjE2Njg1MjMzMDh9.u7hIwcKA-YCAIMUUbytfMtMktpNB8R83FF5KfkgUbDc";

      config.headers.Authorization = `Bearer ${token}`;
   
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

export default api;