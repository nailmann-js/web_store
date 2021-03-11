import { $authHost, $host } from './index';
// import request from './request'
import jwt_decode from "jwt-decode";

// export function registration(email, password) {
//     return request({
//         url: 'api/user/registration',
//         method: 'post',
//         data: {
//             email,
//             password,
//             role: 'ADMIN'
//         }
//     })
// }

export const registration = async (email, password) => { //функция авторизации и проверки токена
    const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const check = async () => {
    const { data } = await $authHost.get('api/user/auth');
    return jwt_decode(data.token);
}