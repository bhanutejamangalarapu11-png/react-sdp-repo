import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavBar from './pages/MainNavBar';
import Home from './pages/Home';
import About from './pages/About';
import Registration from './pages/Registration';
import AdminLogin from './pages/AdminLogin';
import ManagerLogin from './pages/ManagerLogin';
import CustomerLogin from './pages/CustomerLogin';
import './App.css';

function App() {
  return (
    <Router>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/manager-login" element={<ManagerLogin />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
      </Routes>
    </Router>
  );
}

export default App;