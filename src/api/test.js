import request from '@/utils';
export const test = () => {
    return request({
        url: '',
        method: 'get',
        data: {
            test: '123'
        }
    })
}