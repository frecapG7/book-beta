const axios = require('axios');

function refreshToken() {
    return api.post('/token', {
        'token': localStorage.getItem('refreshToken')
    });
}
const api = axios.create({
    baseURL: process.env.API_URL,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    }
});


// interceptor to add Bearer token
api.interceptors.request.use((config) => {
    console.log('Intercept request');
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    } else {
        config.headers['Authorization'] = 'Bearer ' + 'TOTO';
    }
    return config;
}, (error) => {
    console.log('request error');
    return Promise.reject(error);
});


// TODO : intercept response for refresh token
api.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalConfig = error.config;

    if (error.response) {
        if (error.response.status === 401 && !originalConfig._retry) {
            //Use _retry to avoid infinite loop of 401
            originalConfig._retry = true;
            //Call refresh token
            try {
                console.log('call refresh token');
                const refreshToken = await refreshToken();
                localStorage.setItem('accessToken', refreshToken.data.accessToken);
                return api(originalConfig);
            } catch (_error) {
                if (_error.response && _error.response.data) {
                    return Promise.reject(_error.response.data);
                }
                return Promise.reject(_error);
            }

        }
    }
    return Promise.reject(error.response);

});

export default api;


