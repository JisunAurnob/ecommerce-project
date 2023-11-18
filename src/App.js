import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import axios from 'axios';
import SettingsProvider from './components/SettingsProvider';
import { CartProvider } from 'react-use-cart';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import ProductDetails from './pages/ProductDetails';

function App() {
  axios.defaults.baseURL="https://uol-v-2.hostprohub.com/api/";
  return (
    <>
    <ToastContainer />
    <CartProvider>
    <SettingsProvider>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/blog/:slug" element={<BlogDetails />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/product/:slug" element={<ProductDetails />} />
    </Routes>
    </SettingsProvider>
    </CartProvider>
    </>
  );
}

export default App;
