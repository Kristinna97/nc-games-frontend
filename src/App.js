import Header from "./components/Header"
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import LandingPage from "./components/LandingPage";

function App() {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="App">
      <Header/>
       <Navbar/>
       <Routes>
        <Route path="/" element={<LandingPage  setLoading={setLoading} isLoading={isLoading}/>}/>
        <Route path="/reviews" element={<Reviews  setLoading={setLoading} isLoading={isLoading}/>}/>
        <Route path="/reviews/:category" element={<Reviews  setLoading={setLoading} isLoading={isLoading}/>}/>
       </Routes>

    </div>
  );
}

export default App;
