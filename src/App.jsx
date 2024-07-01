import { Outlet } from 'react-router-dom'
import Navbar from './Pages&Components/Components/Navbar/Navbar'
import Footer from './Pages&Components/Components/Footer/Footer'


function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
