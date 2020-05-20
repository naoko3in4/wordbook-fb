import Cookies from 'universal-cookie'

export default ({ route, store, redirect }) => {
  const cookies = new Cookies()
  const user = cookies.get('user')
  if (!user) {
    if (route.path === '/login') {
      return
    }
    return redirect('/login')
  }
  if (user && user.id) {
    const { id } = user
    store.commit('setUser', { user: { id } })
    if (route.path === 'login') {
      return redirect('/')
    }
  }
}
