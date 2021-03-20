import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  // 侧边栏样式
  siderStyle: 'dark',

  // 用户信息面板
  infoBoxShow: false,
  // 是否选择用户
  isSelectUser: false,
  // 轨迹展示面板
  trajBoxShow: {
    pre: false,
    fulfilled: false,
  },
  // 全局轨迹展示面板
  glbTrajBoxShow: {
    pre: false,
    fulfilled: false,
  },
  // 是否弹出警告框
  modalBox: false,
  // heatmap弹窗
  heatmapPopups: false,

  // 存放已展示OD
  existOD: [],
  curUserid: '',
  globalTrajList: [],

  user: {
    '399313': {
      id: 399313,
      nums: 0,
      data: {
        org: [],
        dest: [],
        traj: [],
      },
    },
    '934778': {
      id: 934778,
      nums: 0,
      data: {
        org: [],
        dest: [],
        traj: [],
      },
    },
    '1517739': {
      id: 1517739,
      nums: 0,
      data: {
        org: [],
        dest: [],
        traj: [],
      },
    },
    '1520884': {
      id: 1520884,
      nums: 0,
      data: {
        org: [],
        dest: [],
        traj: [],
      },
    },
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})
