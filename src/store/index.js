import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * Vuex: vue 状态管理，通常用于中大型项目
 */

const store = new Vuex.Store({
	state: {
		uploadPath: '',
		power: 0, // [0: admin][1: users]
		userinfo: {} // user info			
	},
	mutations: {
		loginInfo (state, info) {
			state.userinfo = info
		}
	}
})

export default store