import {baseRequest} from './index'

export const getRecordLens = async (user) => {
    return baseRequest({
        url: `/totalnum/${user}`,
    })
}

export const getTraj = async (user, id) => {
    return baseRequest({
        url: `/traj/${user}/${id}`,
    })
}

export const globalTraj = async (user) => {
    return baseRequest({
        url: `/globaltraj/${user}`,
    })
}