import Cookies from 'universal-cookie'

export const state = () => ({
  isLoggedIn: false,
  user: null
})

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user
}

export const mutations = {
  setUser(state, { user }) {
    state.user = user
    state.isLoggedIn = true
  },
  logOut(state) {
    state.user = ''
    state.isLoggedIn = false
  }
}

export const actions = {
  async login({ commit }, { id }) {
    const user = await this.$axios.$get(`/users/${id}.json`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  },
  async register({ commit }, { id }) {
    const payload = {}
    payload[id] = { id }
    const user = await this.$axios.$get(`/users/${id}.json`)
    if (user) {
      throw new Error('Invalid user')
    } else {
      await this.$axios.$patch(`/users.json`, payload)
      const user = await this.$axios.$get(`/users/${id}.json`)
      if (!user.id) throw new Error('Invalid user')
      commit('setUser', { user })
    }
  },
  logout({ commit }) {
    const cookies = new Cookies()
    cookies.remove('user')
    commit('logOut')
  }
}
