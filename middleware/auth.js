import Cookies from 'universal-cookie'

export default ({ route, redirect }) => {
  const cookies = new Cookies()
  const credential = cookies.get('credential')
  console.log('credential', credential)

  if (!credential) {
    if (route.path === '/login') {
      return
    }
    return redirect('/login')
  }
  if (credential) {
    if (route.path === '/login') {
      return redirect('/')
    }
  }
}
