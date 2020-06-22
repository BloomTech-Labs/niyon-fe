import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    baseURL: 'https://niyon-app.herokuapp.com',
    headers: {
      authorization: token
    }
  })
}
