import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
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