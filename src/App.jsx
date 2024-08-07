import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './pages/landingPage/Landing';
import Srcinput from './components/context/Datasearch';
import { useState } from 'react';

function App() {

  const [searchinp, setSearchinp] = useState("");

  return (
    <>
      <Srcinput.Provider value={{searchinp:searchinp,setSearchinp:setSearchinp}} >
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Landing />} />

        </Routes>
        {/* <Footer/> */}
      </Srcinput.Provider>
    </>
  )
}

export default App
