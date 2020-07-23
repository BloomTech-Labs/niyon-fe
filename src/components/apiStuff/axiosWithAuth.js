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

export const getProfile = (id) => {
  return axiosWithAuth().get(`/profile/${id}`)
}

export const saveProfile = (id, profile) => {
  return axiosWithAuth().post(`/profile/${id}`, profile)
}

export const searchProfile = () => {
  return axiosWithAuth().get('/profile')
}

export const logIn = (values) => {
  return axiosWithAuth().post('/auth/login', values)
}

export const registerUser = (userDetails) => {
  return axiosWithAuth().post('/auth/register', userDetails)
}

export const getNewsFeed = () => {
  return axiosWithAuth().get('/news')
}

export const getUserCard = (endPoint, id, payload) => {
  return axiosWithAuth().post(`/connection/${endPoint}/${id}`, payload)
}
