import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import axios from 'axios';
import SettingsProvider from './components/SettingsProvider';

function App() {
  axios.defaults.baseURL="https://uol-v-2.hostprohub.com/api/";
  return (
    <SettingsProvider>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/blog/:slug" element={<BlogDetails />} />
    </Routes>
    </SettingsProvider>
  );
}

export default App;
