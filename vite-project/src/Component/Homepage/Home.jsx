import React from "react";
import {useNavigate} from 'react-router-dom'
import {BiHomeSmile as Homeicon} from 'react-icons/bi'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'


import './Home.css'

const Menu =() => (
  <>
    <p>Features</p>
    <p>Promo</p>
    <p>How-to</p>
  </>
)



export default function Home(){

  const navigate = useNavigate()
  const [toggleMenu, setToggleMenu] = React.useState(false)

  return (
    // Navbar
    <main id="home-view">
      <nav className="navbar">
        <div className="navbar-title">codingbee</div>
        <div className="nav-links">
          {/* <div><Homeicon/></div> */}
          <div>Features</div>
          <div>Promo</div>
          <div>How to</div>
          <button className="learn-more-color">Learn more</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu
            ? <RiCloseLine  size={60} onClick={(e) => setToggleMenu(false)}></RiCloseLine>
            : <RiMenu3Line size={60} onClick={(e) => setToggleMenu(true)}></RiMenu3Line>
          }
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                 <Menu />
                <button className="learn-more-color">Learn more</button>
              </div>
            </div>
          )

          }
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

