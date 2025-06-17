import React, { useState } from "react";
import "./style.css";
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';

const Blog = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);
  
  const blogs = [
    {
      id: 1,
      title: "The Story Behind BookNest",
      image: b1,
      summary: "Discover how BookNest started and the vision that drives it today.",
      details:
        "BookNest was created to provide easy access to books for everyone. Our mission is to make reading accessible and enjoyable by providing a wide variety of books across different genres.",
    },
    {
      id: 2,
      title: "10 Must-Read Novels of All Time",
      image: b2,
      summary:
        "Check out our curated list of novels that every book lover should read.",
      details:
        "From classics like 'Pride and Prejudice' to modern masterpieces like 'The Kite Runner,' these novels are sure to captivate you and leave a lasting impression.",
    },
    {
      id: 3,
      title: "The Importance of Reading in Daily Life",
      image: b3,
      summary:
        "How reading can shape your mind and help you grow in your daily life.",
      details:
        "Reading enhances creativity, reduces stress, and improves focus. Learn how incorporating reading into your daily routine can benefit you.",
    },
  ];

  const toggleDetails = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Welcome to the BookNest Blog</h1>
        <p>Explore insights, book reviews, and the journey of BookNest!</p>
      </header>
      <section className="blog-section">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.summary}</p>
            {expandedBlog === blog.id && <p className="blog-details">{blog.details}</p>}
            <button onClick={() => toggleDetails(blog.id)}>
              {expandedBlog === blog.id ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
