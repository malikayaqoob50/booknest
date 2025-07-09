import React from 'react';
import './style.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-hero">
        <h1>About BookNest</h1>
        <p>Discover the journey of your ultimate digital library.</p>
      </div>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          BookNest was founded with the vision of making books accessible to
          everyone, anywhere, at any time. From a humble beginning as a
          small collection of books, it has grown into a vast digital
          library catering to readers of all ages and interests.
        </p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to promote knowledge and learning by providing easy
          access to books of various genres. We believe in the power of
          reading to inspire, educate, and transform lives.
        </p>
        <ul>
          <li>Offer a diverse selection of books.</li>
          <li>Create a seamless reading experience.</li>
          <li>Empower communities through learning.</li>
        </ul>
      </section>

      <section className="about-developer">
        <h2>About the Developer</h2>
        <p>
          Hi! I am the sole developer of BookNest. With a passion for web development
          and a love for books, I created this platform to make knowledge accessible to everyone.
          My goal is to provide an intuitive and enjoyable experience for all users.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
