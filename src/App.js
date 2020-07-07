import React, { useState } from 'react'
import { UserContext } from './UserContext'
import Routes from './components/routes/Routes'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import './sass_master/index.scss'
import CssBaseline from '@material-ui/core/CssBaseline'

function App () {
  const [user, setUser] = useState({})
  const [mode, setMode] = useState(false)
  const prefersDarkMode = window.addEventListener('storage', () => {
    setMode(window.localStorage.getItem('darkmode'))
    console.log('dark mode set to ', mode)
  })
  console.log('line 12 in App.js', mode)
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: mode ? 'dark' : 'dark'
        }
      }),
    [prefersDarkMode]
  )

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default App
