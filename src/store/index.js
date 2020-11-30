import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getter'

// 安装插件
Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
    state: {
        carList: [],

    },
    mutations,
    actions,
    getters
})

// 挂载vue实例上
export default store