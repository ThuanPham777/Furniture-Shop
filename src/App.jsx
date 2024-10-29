import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/shop'
              element={<Shop />}
            />
            <Route
              path='/cart'
              element={<Cart />}
            />
            <Route
              path='/wishlist'
              element={<Wishlist />}
            />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
