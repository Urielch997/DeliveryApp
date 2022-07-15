import { Provider } from 'react-redux';
import Routes from './components/Routes'
import Layout from './layout/Layout'
import { GlobalStyle } from './styles/GlobalStyle'
import { store } from './store/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from 'react';
const colorApp = process.env.REACT_APP_COLOR;

const App = () => {

  return (
    <div>
      <Provider store={store}>
        <GlobalStyle colorApp={colorApp || "#fe3705"} />
          <Layout>
            <Routes />
          </Layout>
      </Provider>
    </div>
  )
}

export default App
