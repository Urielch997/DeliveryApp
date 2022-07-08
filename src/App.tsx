import { Provider } from 'react-redux';
import Routes from './components/Routes'
import Layout from './layout/Layout'
import { GlobalStyle } from './styles/GlobalStyle'
import { store } from './store/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
const colorApp = process.env.REACT_APP_COLOR;

const App = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="300939693403-0koo4liitkcnqve45v714ufb4mdqisjt.apps.googleusercontent.com">
        <Provider store={store}>
          <GlobalStyle colorApp={colorApp || "#fe3705"} />
          <Layout>
            <Routes />
          </Layout>
        </Provider>
      </GoogleOAuthProvider>
    </div>
  )
}

export default App
