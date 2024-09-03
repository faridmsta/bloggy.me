import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './pages/landingPage/Landing';
import Srcinput from './components/context/Datasearch';
import { useState } from 'react';
import AllBlogs from './pages/allblogs/AllBlogs';
import Blog from './pages/Blog/Blog';
import User from './pages/user/User';
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login';
import { Toaster } from 'react-hot-toast';


function App() {
  const [isLogged, setIsLogged] = useState(true)
  const [searchinp, setSearchinp] = useState("");

  const location =useLocation()

 
  
  return (
    <>
      <Srcinput.Provider value={{ searchinp: searchinp, setSearchinp: setSearchinp }} >
      <Toaster />
        {!(location.pathname=='/reg' || location.pathname=='/login') && 
        <Header islog={isLogged} /> } 
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/profile" element={< />} /> */}
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blogs/:user/:id" element={<Blog />} />
          <Route path="/:user" element={<User />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Login />} />
        </Routes>
        {!(location.pathname=='/reg' || location.pathname=='/login') && 
        <Footer />}
      </Srcinput.Provider>
    </>
  )
}

export default App
