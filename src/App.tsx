import Routes from './components/Routes'
import Layout from './layout/Layout'
import { GlobalStyle } from './styles/GlobalStyle'
const colorApp = process.env.REACT_APP_COLOR;

const App = () => {
  return (
    <div>
      <GlobalStyle colorApp={colorApp || "#fec405"}/>
      <Layout>
        <Routes/>
      </Layout>
    </div>
  )
}

export default App
