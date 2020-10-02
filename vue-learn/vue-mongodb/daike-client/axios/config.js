export default {
    method: 'post',
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded, Access-Control-Allow-Origin'
    },
    data: {},
    timeout: 10000,
    // 携带凭证
    withCredentials: false,
    responseType: 'json'
}