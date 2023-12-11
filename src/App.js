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
import CheckOut from './pages/CheckOut';
import Registration from './pages/Registration';
import Login from './pages/Login';
import UserProvider from './components/UserProvider';
import Dashboard from './pages/user/Dashboard';
import Profile from './pages/user/Profile';
import AddressBook from './pages/user/AddressBook';
import AddAddress from './pages/user/AddAddress';

function App() {
  axios.defaults.baseURL="https://uol-v-2.hostprohub.com/api/";
  return (
    <>
    <ToastContainer />
    <CartProvider>
    <SettingsProvider>
      <UserProvider>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/blog/:slug" element={<BlogDetails />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/product/:slug" element={<ProductDetails />} />
      <Route exact path="/checkout" element={<CheckOut />} />
      
      <Route exact path="/sign-up" element={<Registration />} />

      <Route exact path="/login" element={<Login />} />

      <Route exact path="/user/dashboard" element={<Dashboard />} />
      <Route exact path="/user/profile" element={<Profile />} />
      <Route exact path="/user/addresses" element={<AddressBook />} />
      <Route exact path="/user/add-address" element={<AddAddress />} />
    </Routes>
      </UserProvider>
    </SettingsProvider>
    </CartProvider>
    </>
  );
}

export default App;
