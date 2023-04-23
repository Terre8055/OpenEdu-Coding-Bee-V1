import React from "react";
import {useNavigate} from 'react-router-dom'

import './Home.css'


export default function Home(){

  const navigate = useNavigate()
  return (
    // Navbar
    <main id="home-view">
      <nav className="navbar">
        <div className="navbar-title">codingbee</div>
        <div className="nav-links">
          <div>Features</div>
          <div>Promo</div>
          <div>How to</div>
          <button className="learn-more-color">Learn more</button>
        </div>
      </nav>
      <section className="content-body">
        <div className="page-intro">
          <h1 className="header">Learn the hot in-demand programming skills on the go </h1>
          <p className="tag">for everyone. Just learn</p>
        </div>
        <div className="loud-img">
          <img src="/woman.png" alt="illustration" />
        </div>
      </section>
      <section className="btn-container">
          <button className="btn-1" onClick={(e) => navigate('/login')}>Get started</button>   
      </section>
    </main>
  )
}