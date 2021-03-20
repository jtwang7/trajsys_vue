import { getRecordLens, getTraj, globalTraj } from '@/network/request';
import { REQTRAJNUM, REQTRAJ, GLBTRAJ } from './mutations-types'

const actions = {
    reqTrajNum(ctx, payload) {
        getRecordLens(payload).then((res) => {
            console.log('traj number request: success');
            ctx.commit(REQTRAJNUM, {
                res,
                userid: parseInt(payload),
            })
        }).catch((err) => {
            console.log(err);
        })
    },
    reqTraj(ctx, payload) {
        getTraj(payload.userid, payload.tid).then(res => {
            console.log('traj request: success');
            ctx.commit(REQTRAJ, {
                res,
                userid: payload.userid,
            })
        }).catch(err => {
            console.log(err);
        })
    },
    reqGlobalTraj(ctx, userid) {
        globalTraj(userid).then(res => {
            console.log('global traj request: success');
            ctx.commit(GLBTRAJ, res)
        }).catch(err => {
            console.log(err);
        })
    },
};

export default actions;