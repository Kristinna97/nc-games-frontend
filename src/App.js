import Header from "./components/Header"
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import SingleReview from './components/SingleReview'
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import LandingPage from "./components/LandingPage";
import { UserContext } from "./context/userContext";

function App() {
  const [isLoading, setLoading] = useState(true);
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
        <Route path="/" element={<LandingPage  setLoading={setLoading} isLoading={isLoading}/>}/>
        <Route path="/reviews" element={<Reviews  setLoading={setLoading} isLoading={isLoading}/>}/>
        <Route path="/reviews/category/:category" element={<Reviews  setLoading={setLoading} isLoading={isLoading}/>}/>
        <Route path="/reviews/:review_id" element={<SingleReview  setLoading={setLoading} isLoading={isLoading}/>}/>
       </Routes>

    </div>
    </UserContext.Provider>
  );
}

export default App;
