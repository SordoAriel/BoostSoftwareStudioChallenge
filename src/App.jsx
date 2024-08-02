import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Layouts/Navbar/Navbar.jsx'
import Footer from './components/Layouts/Footer/Footer.jsx'
import { Home, Products, Contact } from './components/Pages/index.jsx'

function App() {
  return (
    <div className='min-vh-100'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
