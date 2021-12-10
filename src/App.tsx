import Routes from './components/Routes'
import Layout from './layout/Layout'
import { GlobalStyle } from './styles/GlobalStyle'

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Layout>
        <Routes/>
      </Layout>
    </div>
  )
}

export default App
