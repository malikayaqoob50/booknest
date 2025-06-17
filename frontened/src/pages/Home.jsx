import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Assuming this is the correct CSS path
import './Header';
const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to BookNest</h1>
          <p>Your personal library with thousands of books to explore. Discover, read, and download your favorite PDFs!</p>
          <Link to="/booklist">
             <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose BookNest?</h2>
        <div className="feature-item">
          <h3>Vast Collection</h3>
          <p>Access a wide range of books from various genres.</p>
        </div>
        <div className="feature-item">
          <h3>Free Downloads</h3>
          <p>Download books in PDF format for free, anytime.</p>
        </div>
        <div className="feature-item">
          <h3>Explore Categories</h3>
          <p>Browse books by categories like Novels, Science Fiction, History, and more!</p>
        </div>
      </section>

      <section className="cta">
        <h2>Start Your Journey</h2>
        <p>Sign up now and unlock the full potential of BookNest. Start reading and downloading your favorite books!</p>
        <Link to="/signup">     
           <button className="cta-btn">Sign Up Now</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
