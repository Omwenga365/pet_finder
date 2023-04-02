import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from "./components/pages/Home";
import Signup from './components/Signup';
import Login from "./components/Login";
import Footer from './components/Footer';
import AddMissingPet from './components/pages/AddMissingPet';
import AboutContacts from './components/pages/AboutContacts';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login onLogin={setUser} signup={<Signup onLogin={setUser}/>} />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/about" element={<AboutContacts />} />
        <Route path="/contacts" element={<AboutContacts />} />
        <Route path="/add-missing-pet" element={<AddMissingPet />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
