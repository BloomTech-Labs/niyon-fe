import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { axiosWithAuth } from '../apiStuff/axiosWithAuth'

const News = (props) => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      await axiosWithAuth()
        .get('/news')
        .then((res) => {
          if (res) {
            setNews(res.data)
            console.log(res)
          }
        })
        .catch((err) => console.log(err))
    }
    apiCall()
  }, [])
  console.log(news)

  return (
    <>
      <Header />

      <Footer />
    </>
  )
}

export default News
