import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
        const token = localStorage.getItem("access_token");
        // Do something before request is sent
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }, error => {
        // Do something with request error
        return Promise.reject(error);
    }
)

// response interceptor
service.interceptors.response.use(response => {
        if (response.status === 200 || response.status === 201) {
            return Promise.resolve(response);
        }
    }, error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 400:
                    //do something
                    break;
                case 401:
                    //do something
                    break;
                case 403:
                    //do something
                    break;
                case 404:
                    //do something
                    break;
                case 502:
                    //do something
                    break
            }
            return Promise.reject(error.response);
        }
    }
)

export default service;