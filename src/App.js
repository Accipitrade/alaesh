import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.png';
import parallaxImg from './parallax_image.jpg';
import { Parallax, useParallax } from 'react-scroll-parallax';
import Gallery  from './Gallery/Gallery.js';

function App() {
  const { ref } = useParallax({
    speed: -30, // Adjust speed to control the parallax effect strength
  });

  return (
    <div className="app" style={{ overflow: 'hidden' }}>
      <header className='background' ></header>

      <Parallax translateY={[-30, -700]}>
        <img src={logo} alt="Logo" className="logo" />
      </Parallax>
      <div style={{ textAlign: 'center', zIndex: '0', marginTop: '-40vh', position: 'relative', fontSize: '40px', marginBottom:'10vh' }}>↓</div>

      <Parallax translateX={[100, 25]}>
            <h2>Traditional Barbecue Techniques.</h2>
          </Parallax>

          <Parallax translateX={[0, 75]}>
            <h2>Traditional Middle Eastern Spices.</h2>
          </Parallax>



      <Parallax speed={20}>
        <section className="menu-section">
          <div>
            <h1 style={{ textAlign: 'center' }}>View Menu by Location</h1>
            <div className="buttons">
              <button>View Sharon Menu</button>
              <span>368 S Main St, Sharon, MA</span>
              <button>View Normandy Farms Menu</button>
              <button>Order Online</button>
              <span>72 W Foxborough St, Foxborough, MA</span>
              <div style={{marginTop:'10vh'}}></div>
              <span>View Our Catering Menu</span>
              <button>Catering</button>
            </div>
          </div>
          <div className="parallax-window" >
            <div className="parallax-background" ref={ref}></div>
          </div>
        </section>
      </Parallax>



      <Parallax speed={30}>
        <div className="about-us">
          <h2>About Us</h2>
          <div>Our team, led by Executive Chef Avi Shemtov, approaches barbecue from a unique perspective. Focused on award winning barbeque quality and progressive flavors, a La Esh is something very familiar that's unlike anything you've ever had before.</div>
          <div>In recent years, a La Esh has partnered with luxury campground Normandy Farms in Foxborough, Massachusetts, to bring Chef Avi's unique take on barbecue to the campground. Join us in the spring, summer and fall inside Normandy farms to try our unique take on barbecue and classic camp favorites!</div>
        </div>
      </Parallax>




      <section className="gallery">
        <Gallery />
      </section>

      <section className="inquiry">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
