import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
