import { $authHost, $host } from './index';
import request from './request';

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
    const response = await $host.post('api/user/registration', { email, password, role: 'ADMIN' });
    return response;
}

export const login = async (email, password) => {
    const response = await $host.post('api/user/login', { email, password });
    return response;
}

export const check = async () => {
    const response = await $host.post('api/auth/registration');
    return response;
}