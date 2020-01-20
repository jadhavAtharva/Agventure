import router from '../../router'
const state = {
  users: [
  ],
  login: [],
  loggedIn: false
}

const getters = {
  allUsers: state => state.users,
  loggedIn: state => state.login,
  logIn: state => state.loggedIn

}

const actions = {
  addUsers ({commit}, user) {
    commit('newUsers', user)
  },
  login ({commit}, login) {
    commit('newLogin', login)
  },
  logout ({commit}) {
    commit('logot')
  }
}

const mutations = {
  newUsers (state, user) {
    state.users.push(user)
  },
  newLogin (state, login) {
    state.login = state.users.filter(p => login.contact === p.contact)
    if (state.login.length === 0) {
      alert('User not Registered')
    } else {
      state.loggedIn = true
      router.push('./profile')
    }
  },
  logot (state) {
    state.loggedIn = false
    state.currentUser.pop()
  }
}

export default {
  state, getters, actions, mutations
}
