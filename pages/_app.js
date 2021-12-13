import '../styles/globals.css'
import { UserDataProvider } from "../components/UserDataProvider"
import { UserProductDataProvider } from "../components/UserProductDataProvider";


function MyApp({ Component, pageProps }) {
  return (
    <UserDataProvider>
      <UserProductDataProvider>
        <Component {...pageProps} />
      </UserProductDataProvider>
    </UserDataProvider>
  );
}

export default MyApp
