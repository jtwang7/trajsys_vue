import { basePost } from './index'

export const login = (config) => {
    const { account, password } = config;
    return basePost({
        url: '/login',
        data: {
            account,
            password,
        }
    })
}