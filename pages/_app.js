import '../styles/globals.css'
import {UserDataProvider} from "../components/UserDataProvider"

function MyApp({ Component, pageProps }) {
  return (
    <UserDataProvider>
      <Component {...pageProps} />
    </UserDataProvider>
  );
}

export default MyApp
