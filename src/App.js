import React from 'react';
import './styles/App.css';
import './styles/Component.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FileNav from './components/FileNav';
import Projects from './components/Projects';
import About from './components/About';
import Logo from './components/Logo';
import Header from './components/Logo';
import { useState } from 'react';
import ranka from './ranka.svg';


function App() {
  return (
    <BrowserRouter>
      <div className="landing container-fluid">
        <Header />

        <div className="hero-section row align-items-center">
          <div className="col-md-6 text-white">
            <h1>
              Frontend <br /> Programuotoja
            </h1>
          </div>

          <div className="image-wrapper col-md-6">
            <div className="nuotrauka1"
              style={{
                  background: `url(${ranka}) center / cover no-repeat`
                }}
            />

            <div className="skills-card">
              <img src="/static/igudziai.png" alt='igudziai' width='300px' height='250px'
                    className='igudziai-img' />
            </div>
          </div>
        </div>
      
        <div className="files-layer">
          <FileNav />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;