import Header from "./components/Header"
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import SingleReview from './components/SingleReview'
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import LandingPage from "./components/LandingPage";
import { UserContext } from "./context/userContext";
import React from 'react';

function App() {

  const [user, setUser] = useState( {
    username: 'grumpy19',
    name: 'Paul Grump',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013',
  });
  return (
    <UserContext.Provider value={{ user }}>
    <div className="App">
      <Header/>
       <Navbar/>
       <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/reviews" element={<Reviews  />}/>     
        <Route path="/reviews/category/:category" element={<Reviews  />}/>     
        <Route path="/reviews/:review_id" element={<SingleReview  />}/>
        <Route path="*" element={<ErrorPage />}/>
       </Routes>

    </div>
    </UserContext.Provider>
  );
}

export default App;
