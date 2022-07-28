import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Login from './components/Login';
import Admin from './components/Admin';
import AdminCreate from './components/AdminViews/AdminCreate';
import AdminEdit from './components/AdminViews/AdminEdit'
import Register from "./components/Register";
import AuthContext from "./store/auth-context";
import RequireAuth from "./components/RequireAuth";
import CourseView from './components/CourseView';
function App() {
  const authCtx = useContext(AuthContext);
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>


        {/* protected routes routes  */}
          <Route path="/" exact element={<Home />}></Route>
          
          <Route path="/admin" element={<Admin />} />
          <Route path="admin/cursos/agregar" element={<AdminCreate />} />
          <Route path="admin/cursos/editar/:id" element={<AdminEdit />} />


        {/* public routes  */}
        <Route path="/cursos" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/cursos/:slug" element={<CourseView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
