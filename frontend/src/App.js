import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Login from './components/Login';
import Admin from './components/Admin';
import AdminCreate from './components/AdminViews/AdminCreate';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}   />
        <Route path="/cursos" element={<Courses />}   />
        <Route path="/login" element={<Login />}   />
        <Route path="/admin" element={<Admin />}   />
        <Route path="admin/cursos/agregar" element={<AdminCreate />}   />

      </Routes>
    <Footer />
    </BrowserRouter>
  );
}


export default App;
