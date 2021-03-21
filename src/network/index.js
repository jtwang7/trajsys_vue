import axios from 'axios'

export const baseRequest = (config) => {
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:7001',
        method: 'get',
        timeout: 10000,
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    return instance(config)
}


export const basePost = (config) => {
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:7001',
        method: 'post',
        timeout: 5000,
    })

    instance.interceptors.response.use(
        res => {
            return res.data
        },
        err => {
            console.log(err);
        })

    return instance(config)
}