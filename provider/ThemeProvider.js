import { useState, useContext, useMemo } from 'react'

import { ThemeContext, themes } from 'context/ThemeContext'

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light)

  function ToggleTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  const themeAPI = useMemo(() => {
    return {
      theme,
      ToggleTheme,
    }
  }, [theme, ToggleTheme])

  return (
    <ThemeContext.Provider value={themeAPI}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider
