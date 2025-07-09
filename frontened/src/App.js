import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Header from './pages/Header';
import Footer from './pages/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';

function app(){
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BookList" element={ <BookList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </Router>

  );
}


export default app;
