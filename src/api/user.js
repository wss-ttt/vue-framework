import request from '../utils/request';

export const getUsersList = (query) => {
    return request({
        url: '/api/users/list',
        method: 'post',
        data: query
    })
}