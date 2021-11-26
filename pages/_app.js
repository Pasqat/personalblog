import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faSun,
  faMoon,
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
} from '@fortawesome/free-solid-svg-icons'

import ThemeProvider from 'provider/ThemeProvider'

config.autoAddCss = false
library.add(
  faSun,
  faMoon,
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp
)

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'highlight.js/styles/night-owl.css'
import 'styles/index.scss'
import 'react-toggle/style.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
