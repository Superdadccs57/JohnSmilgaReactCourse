// CSS
import './index.css'

import { createRoot } from 'react-dom/client' //This is React 18 syntax
const container = document.getElementById('root');
const root = createRoot(container);

// Nested Components, React Tools
// Setup Vars
const books = [
  {
    img: 'https://m.media-amazon.com/images/I/81TFRojp+uL._AC_UY218_.jpg',
    title: 'Wheel of Time Box Set',
    author: 'Robert Jordan / Brandon Sanderson',
    altText: 'Wheel of Time Boxset',
  },

  {
    img: 'https://m.media-amazon.com/images/I/51WEFBk27LL._AC_UY218_.jpg',
    title: 'Options Trading For Dummies',
    author: 'by Joe Duarte',
    altText: 'Options Trading for Dummies',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81H03VyZLSL._AC_UY218_.jpg',
    title: 'Technical Analysis For Dummies',
    author: 'by Barbara Rockerfella',
    altText: 'Technical Analysis For Dummies',
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return( 
        <Book book={book}></Book>
        )
      })}
    </section>
  );
}
const Book = (props) => {
  const {img, title, author,altText} = props.book
  return (
    <article className="book">
      <img src={img} alt={altText} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}




root.render(<BookList />);