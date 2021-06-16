import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faBorderAll, faList, faSortNumericDown, faSortNumericUp);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/night-owl.css';
import 'styles/index.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
