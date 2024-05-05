import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.png';
import parallaxImg from './parallax_image.jpg';
import { Parallax, useParallax } from 'react-scroll-parallax';
import Gallery from './Gallery/Gallery.js';
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
      <div style={{ textAlign: 'center', zIndex: '0', marginTop: '-40vh', position: 'relative', fontSize: '40px', marginBottom: '10vh' }}>↓</div>

      <section className="menu-section">
        <div>
          <h1 style={{ textAlign: 'center' }}>View Menu by Location</h1>
          <div className="buttons">
            <button>View Sharon Menu</button>
            <span>368 S Main St, Sharon, MA</span>
            <button>View Normandy Farms Menu</button>
            <button>Order Online</button>
            <span>72 W Foxborough St, Foxborough, MA</span>
            <div style={{ marginTop: '10vh' }}></div>
            <span>View Our Catering Menu</span>
            <button>Catering</button>
          </div>
        </div>
        <div className="parallax-window" >
          <div className="parallax-background" ref={ref}></div>
        </div>
      </section>

      <div className='animated-transition'>
        <Parallax translateX={[100, 25]}>
          <h2 style={{ paddingTop: '50px' }}>Traditional Barbecue Techniques.</h2>
        </Parallax>


        <Parallax translateX={[0, 75]}>
          <h2>Traditional Middle Eastern Spices.</h2>
        </Parallax>
      </div>

      <h2>Check out our feature in Phantom Gourmet!</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FikAAVJahBk?si=70L-UanjCYY5Kxiq" title="Phantom Gourmet at a la Esh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <div className='animated-transition' >
      <Parallax translateX={[0, 25]}>
        <h2 style={{ paddingTop: '50px' }}>The Smoker's Always On!</h2>
        </Parallax>
      </div>

      <div className="about-us">
        <h2>About Us</h2>
        <div>Our team, led by Executive Chef Avi Shemtov, approaches barbecue from a unique perspective. Focused on award winning barbeque quality and progressive flavors, a La Esh is something very familiar that's unlike anything you've ever had before.</div>
        <div>In recent years, a La Esh has partnered with luxury campground Normandy Farms in Foxborough, Massachusetts, to bring Chef Avi's unique take on barbecue to the campground. Join us in the spring, summer and fall inside Normandy farms to try our unique take on barbecue and classic camp favorites!</div>
      </div>

      <div className='animated-transition'>
      <Parallax translateX={[40, 25]}>
        <h2 style={{ paddingTop: '50px' }}>Having a Party? We got the smoke.</h2>
        </Parallax>
      </div>

      <section className="gallery">
        <Gallery />
      </section>

      <section className="inquiry">
        <h3>Interested in Catering, or have a question? Drop us a line!</h3>
        <div>Phone Number Here</div>
        <div>or, message us!</div>
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
