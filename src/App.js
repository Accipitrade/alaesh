import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="app">
      <header className='background' >
        <img src={logo} alt="Logo" className="logo" />
        <h4 className="subtitle">Traditional Southern Barbecue Techniques. Traditional Middle Eastern Spices.</h4>
        <h1 style={{textAlign:'center'}}>View Menu by Location</h1>
        <div className="buttons">
          <button>View Sharon Menu</button>
          <span>368 S Main St, Sharon, MA</span>
          <button>View Normandy Farms Menu</button>
          <button>Order Online</button>
          <span>72 W Foxborough St, Foxborough, MA</span>
        </div>
      </header>
      <section className="about-us">
        <h2>About Us</h2>
        <p>Our team, led by Executive Chef Avi Shemtov, approaches barbecue from a unique perspective. Focused on award winning barbeque quality and progressive flavors, a La Esh is something very familiar that's unlike anything you've ever had before.</p>
        <p>In recent years, a La Esh has partnered with luxury campground Normandy Farms in Foxborough, Massachusetts, to bring Chef Avi's unique take on barbecue to the campground. Join us in the spring, summer and fall inside Normandy farms to try our unique take on barbecue and classic camp favorites!</p>
      </section>
      <section className="gallery">
        {/* Gallery content goes here */}
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
