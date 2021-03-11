import axios from "axios";


// create an axios instance
const service = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // default 
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 300000 // request timeout
});

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        return config;
    },
    error => {
        // do something with request error
        // console.log(error); // for debug
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {

        const res = response.data;
        // console.log(response);

        // if the custom code is not 20000, it is judged as an error.
        if (response.status !== 200) {
            let { message } = response;
            message = message.length > 200 ?
                message.substring(0, 200 - 3) + "..." :
                message;

            console.log(message);

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (
                response.status === 50008 ||
                response.status === 50012 ||
                response.status === 50014
            ) {
                // to re-login
                console.log('You must login')
            }
            return Promise.reject(new Error(response || "Error"));
        } else {
            return res;
        }
    },
    error => {
        // console.log("heres error", error); // for debugging

        console.log(error.response.data)

        return Promise.reject(error);
    }
);

export default service;