import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import './interseptors/axios'


let isRefreshing = false;
let subscribers = {};

axios.interceptors.response.use(
    response => {
    return response;
}, 
err => {
    const {
        config,
        response: {status, data}
    } = err;

    const originalRequest = config;

    if(data.message === "Missing_Token"){
        router.push({name: 'login'});
        return Promise.reject(false);
    }

    if(originalRequest.url.includes("login_check")) {
        return Promise.reject(err);
    }

    if(status === 401 && data.message === 'Expired token'){
        if(!isRefreshing){
            isRefreshing = true;
            store
            .dispatch("REFRESH_TOKEN")
            .then(({status}) => {
                if(status === 200 || status === 204) {
                    isRefreshing = false;
                }
                subscribers = [];
            })
            .catch(error => {
                console.error(error);
            });
        }
        
        const requestSubscribers = new Promise(resolve => {
            subscriberTokenRefresh(() => {
                resolve(axios(originalRequest));
            });
        });

        onRefresh();

        return requestSubscribers;
      }
    }
 );

 function subscriberTokenRefresh(cb) {
    subscribers.push(cb)
 }

 function onRefresh() {
    subscribers.map(cb => cb());
 }

 subscribers = [];


createApp(App).mount('#app')
