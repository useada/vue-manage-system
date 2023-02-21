import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: './table.json',
        method: 'get'
    });
};

export const fetchBrokerList = () => {
    return request({
        url: '/api/v1/broker/list',
        method: 'get',
        baseURL: 'http://127.0.0.1:2020',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('ms_token') },
    })
};

export const brokerAuth = (identifyCode: string) => {
    return request({
        url: '/api/v1/broker/auth',
        method: 'post',
        baseURL: 'http://127.0.0.1:2020',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('ms_token') },
        data: {
            'identifyCode': identifyCode,
        },
    })
};

export const brokerLogout = (identifyCode: string) => {
    return request({
        url: '/api/v1/broker/logout',
        method: 'post',
        baseURL: 'http://127.0.0.1:2020',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('ms_token') },
    })
};

export const brokerStartTrade = (identifyCode: string) => {
    return request({
        url: '/api/v1/broker/startTrade',
        method: 'post',
        baseURL: 'http://127.0.0.1:2020',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('ms_token') },
    })
};

export const brokerStopTrade = (identifyCode: string) => {
    return request({
        url: '/api/v1/broker/stopTrade',
        method: 'post',
        baseURL: 'http://127.0.0.1:2020',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('ms_token') },
    })
};