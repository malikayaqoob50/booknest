import React, { useState } from 'react';
import './style.css';

const books = [
  {
    category: 'Islamic Books',
    items: [
      { title: 'The Quran', image: require('../assets/quran.png'), link: 'https://quran.com/en' },
      { title: 'Sahih Al Bukhari', image: require('../assets/hadees.png'), link: 'https://www.sahih-bukhari.com/' },
      { title: 'Seerah of Prophet Muhammad', image: require('../assets/serah.jpg'), link: 'https://www.islamicstudies.info/history/seerah/Muhammad-the-Last-Prophet.pdf' },
      { title: 'Riyad ul Saliheen', image: require('../assets/riyadsalhn.jpg'), link: 'https://www.kalamullah.com/Books/Riyad-us-Saliheen.pdf' },
      { title: 'The sealed Nectar', image: require('../assets/sealedNectar.jpg'), link: 'https://www.kalamullah.com/Books/The%20Sealed%20Nectar.pdf' },
    ],
  },
  {
    category: 'Novels',
    items: [
      { title: 'Peer e Kamil', image: require('../assets/peerk.jpg'), link: 'https://kitabnagri.org/pir-e-kamil-novel-by-umera-ahmed/' },
      { title: 'Abe Hayat', image: require('../assets/abehyt.jpg'), link: 'https://kitabnagri.org/aab-e-hayat-novel/' },
      { title: 'Mushaf', image: require('../assets/mshf.jpg'), link: 'https://kitabnagri.org/mushaf-novel-by-nimra-ahmed/' },
      { title: 'Iblees', image: require('../assets/ibls.jpg'), link: 'https://kitabnagri.org/iblees-novel-by-nimra-ahmed/' },
      { title: 'Dana Pani', image: require('../assets/dnapani.jpg'), link: 'https://kitabnagri.org/dana-pani-novel-by-umera-ahmed-complete-episodes/' },
    ],
  },
  {
    category: 'Kids Valley',
    items: [
      { title: 'Maula Bakhsh', image: require('../assets/mulabhksh.jpg'), link: 'https://www.urdupoint.com/kids/detail/moral-stories/maula-bakhsh-2716.html' },
      { title: 'Garoor ki Saza', image: require('../assets/2.jpg'), link: 'https://www.urdupoint.com/kids/detail/moral-stories/gharoor-ki-saza-2713.html' },
      { title: 'Munu ki Bahaduri', image: require('../assets/3.jpg'), link: 'https://www.urdupoint.com/kids/detail/moral-stories/munnu-ki-bahaduri-2711.html' },
      { title: 'Chota Phool', image: require('../assets/4.jpg'), link: 'https://www.urdupoint.com/kids/detail/moral-stories/chota-phool-2712.html' },
      { title: 'Itefaq me Barkat', image: require('../assets/5.jpg'), link: 'https://www.urdupoint.com/kids/detail/moral-stories/ittefaq-mein-barkat-hai-2156.html' },
    ],
  },
  {
    category: 'Science Fiction',
    items: [
      { title: 'Dune', image: require('../assets/dune.jpg'), link: 'https://www.goodreads.com/book/show/234225.Dune' },
      { title: 'The Martian', image: require('../assets/martian.jpg'), link: 'https://www.goodreads.com/book/show/18007564-the-martian' },
      { title: 'Ender’s Game', image: require('../assets/enderGame.jpg'), link: 'https://www.goodreads.com/book/show/375802.Ender_s_Game' },
      { title: 'Neuromancer', image: require('../assets/neuromancer.jpg'), link: 'https://www.goodreads.com/book/show/22328.Neuromancer' },
    ],
  },
];

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter books based on search term
  const filteredBooks = books
    .map(category => ({
      ...category,
      items: category.items.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.category.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(category => category.items.length > 0);

  return (
    <div className="booklist">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books by title or category..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredBooks.length > 0 ? (
        filteredBooks.map((category, index) => (
          <div key={index} className="category">
            <h2>{category.category}</h2>
            <div className="books-container">
              {category.items.map((book, i) => (
                <div key={i} className="book-item">
                  <img src={book.image} alt={book.title} className="book-image" />
                  <h3>{book.title}</h3>
                  <div className="button-container">
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn open-book"
                    >
                      Open Book
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="no-results">No books found. Please try a different search term.</p>
      )}
    </div>
  );
};

export default BookList;
