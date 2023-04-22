import React from "react"
import { useNavigate } from "react-router-dom"
import './Home.css'

export default function Home() {

  const navigate = useNavigate()

  const redirectPageToLogin = (e) => {
    navigate('/login')
  }



  return (
    <>
      <nav className="nav">
        {/* <div className="home-icon"><i className="gg-home-alt"></i></div> */}
        <div className="nav-links">Demo</div>
        <div className="nav-links">Blog</div>
        <div className="nav-links">Live</div>
        <div className="nav-links">Help</div>
        {/* <div className="nav-links" onClick={redirectPageToLogin}>SignOut</div> */}
      </nav>
      <header className="intro">
        <div className="intro-head">
          <p className="intro-head-p">Welcome to our e-learning platform where you can learn the latest skills in the technology industry. Our platform offers interactive and comprehensive courses that will help you take your career to the next level. With features like 24/7 support and mentorship, you will have the guidance you need to succeed.</p>
        </div>
        <div className="intro-img">
          <img src="\home-bkg-images\undraw_Programming_re_kg9v.png" alt="" />
        </div>
      </header>
      <section className="sect-props">
        <div className="props-img">
          <img src="\home-bkg-images\undraw_Team_up_re_84ok.png" alt="" />
        </div>
        <div className="props-head">
          <p className="props-head-p">Our courses are designed to be hands-on and interactive, giving you the opportunity to apply what you learn in real-world scenarios. With a focus on both front-end and back-end development, our courses are designed to help you build the skills you need to excel in your career.</p>
        </div>
      </section>
      <section className="sect-props-outlet">

      </section>
      <div className="btn-container">
        <button className="fe-hero-btn" onClick={redirectPageToLogin}>Get Started</button>
        {/* <img className="divider-icon" src="\icons8-bee-color-96.png" alt="" /> */}
        {/* <button className="ss-hero-btn" onClick={redirectPageToLogin}>Explore Backend Development</button> */}
      </div>
      <div className="line-layout">
        <hr className="line-1" />
        <hr className="line-2" />
        <hr className="line-3" />
        <hr className="line-4" />
      </div>
      <footer className="home-footer">
        <div className="quick-links">
          <a href="https://github.com/yourusername"><i className="fab fa-github"></i></a>
        </div>
        </footer>
    </>
  )}
