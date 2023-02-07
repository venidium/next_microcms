import '../styles/globals.css'
import '../styles/reset.css'
import { func } from '../js/func'; //共通JS

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
