import router from '@/router';
import { transformAMap } from '@/components/common/map/gcoord';
import { colorBar } from '@/components/common/colorbar';

import { SELECT, MENUSELECT, CLEARUSER, REQTRAJNUM, REQTRAJ, GLBTRAJ, SHOWHEATMAPPOPUPS, HIDHEATMAPPOPUPS, MODALCLICK, WATCHUSERID } from './mutations-types'

const mutations = {
    // Style Button点击
    [SELECT](state, payload) {
        switch (payload) {
            case '0':
                if (state.siderStyle === 'dark') {
                    state.siderStyle = 'light';
                    document.getElementById('sider').style.backgroundColor = '#fff';
                } else if (state.siderStyle === 'light') {
                    state.siderStyle = 'dark';
                    document.getElementById('sider').style.backgroundColor = '#515a6e';
                }
                break;
            case '1':
                router.push('/gaode');
                break;
            case '2':
                router.push('/mapbox');
                break;

            default:
                break;
        }
    },
    // 菜单点击
    [MENUSELECT](state, payload) {
        switch (payload) {
            case '1-1':
                state.infoBoxShow = true;
                break;
            case '1-2':
                state.trajBoxShow.pre = true;
                if (state.isSelectUser) {
                    state.trajBoxShow.fulfilled = true;
                } else {
                    state.modalBox = true;
                }
                break;
            case '1-3':
                state.glbTrajBoxShow.pre = true;
                if (state.isSelectUser) {
                    state.glbTrajBoxShow.fulfilled = true;
                } else {
                    state.modalBox = true;
                }
                break;

            default:
                break;
        }
    },
    [CLEARUSER](state) {
        state.isSelectUser = false;
        state.curUserid = '';
        state.trajBoxShow.fulfilled = false
        state.glbTrajBoxShow.fulfilled = false;
    },
    // 存储请求的数据，同时打开菜单选项权限
    [REQTRAJNUM](state, payload) {
        state.curUserid = payload.userid
        state.user[payload.userid].nums = payload.res
        state.isSelectUser = true
        if (state.trajBoxShow.pre) {
            state.trajBoxShow.fulfilled = true;
        }
        if (state.glbTrajBoxShow.pre) {
            state.glbTrajBoxShow.fulfilled = true;
        }
    },
    // 获取一条指定轨迹数据
    [REQTRAJ](state, payload) {
        // 清空之前的轨迹数据
        state.user[payload.userid].data.traj = []
        const res = payload.res
        state.user[payload.userid].data.org = transformAMap(res.org);
        state.user[payload.userid].data.dest = transformAMap(res.dest);
        for (let i in payload.res.lngs) {
            state.user[payload.userid].data.traj.push(transformAMap([res.lngs[i], res.lats[i]]))
        }
    },
    [GLBTRAJ](state, res) {
        const color = colorBar;
        state.globalTrajList = [].concat.apply([], res.map(function (item, idx) {
            // item: [[x1,x2],[y1,y2],..]
            let res = item.map(function (v) {
                return transformAMap(v)
            })
            // return {
            //     coords: res,
            // };
            return {
                coords: res,
                lineStyle: {
                    // color: color[idx % color.length],
                    color: color[Math.round(Math.random() * colorBar.length)]
                }
            };
        }));
    },
    // 显示热力图相关弹窗
    [SHOWHEATMAPPOPUPS](state) {
        state.heatmapPopups = true
    },
    // 隐藏热力图相关弹窗
    [HIDHEATMAPPOPUPS](state) {
        state.heatmapPopups = false
    },
    // 不正确操作出发警告框
    [MODALCLICK](state) {
        state.modalBox = false;
        state.infoBoxShow = true;
    },
    // userid为空，则关闭菜单选项
    [WATCHUSERID](state, payload) {
        if (!payload) {
            state.isSelectUser = false
        }
    }
};

export default mutations;