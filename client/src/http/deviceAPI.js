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

export const createType = async (name) => {
    const { data } = await $authHost.post('api/type', { name });
    return data;
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type');
    return data;
}

export const createBrand = async (name) => {
    const { data } = await $authHost.post('api/brand', { name });
    return data;
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand');
    return data;
}