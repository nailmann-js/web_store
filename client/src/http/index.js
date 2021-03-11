import axios from 'axios';

const $host = axios.create({ // инстанс
    baseURL: process.env.REACT_APP_API_URL //токен по умолчанию
});

const $authHost = axios.create({ // инстанс
    baseURL: process.env.REACT_APP_API_URL //токен по умолчанию
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}