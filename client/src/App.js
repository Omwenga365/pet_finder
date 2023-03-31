import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";
// import Button from "./components/Button";
import Signup from './components/Signup'
import Login from "./components/Login";
import Footer from './components/Footer';
import AddMissingPet from './components/pages/AddMissingPet';
import AboutContact from './components/pages/AboutContact';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("https://paw-finder-production.up.railway.app/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return (
      <>
      <Router>
        <Switch>
          <Route><Login onLogin={setUser} signup = {<Signup onLogin={setUser}/>} /></Route>
        </Switch>
      </Router>
      </>
  );

  return (
    <>
        <Router>
          <Navbar user={user} setUser={setUser}/>
          <Switch>
            <Route exact path="/" component = {Home} user={user} ></Route>
            <Route path="/about" exact component = {AboutContact} ></Route>
            <Route path="/contacts" exact component = {AboutContact} ></Route>
            <Route path="/add-missing-pet" exact component = {AddMissingPet} ></Route>
            <Route path="/login" exact component = {Login} setUser = {setUser}></Route>
            <Route path="/signup" exact component = {Signup} setUser = {setUser} ></Route>
          </Switch>
          <Footer />
        </Router>
    </>
  )
}

export default App;