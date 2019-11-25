import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import { useTheme, ThemeProvider } from './theme'

//
// Using local storage may not work from CodeSandbox sidepane
// because of local storage not being accessible from an iframe.
// Open it in another tab by clicking on the button “Open in a
// new window” at top tight, or go to https://kxxfs.csb.app/
//

const ChangeThemeButton = ({ children, theme }) => {
  const [currentTheme, setTheme] = useTheme()
  const changeTheme = useCallback(() => setTheme(theme), [theme, setTheme])
  return (
    <button
      className={theme === currentTheme ? 'active' : ''}
      onClick={changeTheme}
    >
      {children}
    </button>
  )
}

const ThemeClassOnBody = () => {
  const [theme] = useTheme()
  return (
    <Helmet>
      <body className={theme} />
    </Helmet>
  )
}

const App = () => (
  <>
    <ThemeClassOnBody />
    <div className="App">
      <ChangeThemeButton theme="dark">Dark theme</ChangeThemeButton>
      <ChangeThemeButton theme="light">Light theme</ChangeThemeButton>
    </div>
  </>
)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  rootElement
)
