export const darkMode = (e) => {
  e.preventDefault()
  const currentValue = window.localStorage.getItem('darkmode')
  const setValue = (value) => {
    if (value === 'true') {
      window.localStorage.setItem('darkmode', false)
    } else {
      window.localStorage.setItem('darkmode', true)
    }
  }
  setValue(currentValue)
}
