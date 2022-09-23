import { React, useEffect } from 'react';
import './App.css';
import { Navbar, Contact } from './components/organism';
import { HeaderProfile } from './components/molecul';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, About, Skills, Interest, Work, Achievements } from './components/pages';

export default function App() {

  useEffect(() => {
    const ele = document.getElementById('MainBody');
    ele.style.animation = 'fadeOutPage .7s ease-out'; 
    setTimeout(() => {
      ele.classList.add('showPage');
    }, 70);
  }, [])

  // componentDidMount() {
  //   const ele = document.getElementById('MainBody');
  //   ele.style.animation = 'fadeOutPage 1s ease-out 0s 1 normal none running';
  //   setTimeout(() => {
  //     ele.classList.add('showPage');
  //   }, 2000);
  // }

  return (
    <div className="App">
      <div id="MainBody"></div>
      <Navbar />
      <Contact />
      <Routes>
        <Route path="/" element={ <Navigate to="/home" /> } />
        <Route path="/Home" element={<Home />}>
          <Route path="About" element={<About />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Interest" element={<Interest />} />
        </Route>
        <Route path="/Work" element={ <Work /> } />
        <Route path="/Achievements" element={ <Achievements /> } />
      </Routes>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
  
}