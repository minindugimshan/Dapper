import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import NewArrivals from './pages/NewArrivals'
import ShopAll from './pages/ShopAll'
import Collections from './pages/Collections'
import SuperDeals from './pages/SuperDeals'
// import About from './pages/About'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/shop-all" element={<ShopAll />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/super-deals" element={<SuperDeals />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App