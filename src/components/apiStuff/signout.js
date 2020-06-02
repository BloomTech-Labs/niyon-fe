export const signout = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location = "/";
  }