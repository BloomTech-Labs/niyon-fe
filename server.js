const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/', {
      target: 'https://niyon-be-chat.herokuapp.com/',
      secure: false,
      changeOrigin: true
    })
  )

  app.use(
    proxy('/chathistory', {
      target: 'https://niyon-be-chat.herokuapp.com/',
      secure: false,
      changeOrigin: true
    })
  )
}
