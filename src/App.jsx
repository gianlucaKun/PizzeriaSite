import './App.css';
import Home from './pages/home/Home';
// import Header from './components/header/Header';
// import Navbar from './components/navbar/Navbar';
// import Sidebar from './components/sidebar/Sidebar';
// import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Menu from './pages/menu/Menu';


function App() {
  return (
    <div className="App">
    {/* <Sidebar className="sidebar sidebarContainer" /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home className="main homeContainer" />} />
        <Route path="/menu" element={<Menu className="main menuContainer" />} />
        <Route path="/about" element={<About className="main aboutContainer" />} />
      </Routes>
    </BrowserRouter>
{/*     
    <Footer className="footer footerContainer" /> */}
  </div>
  );
}

export default App;
