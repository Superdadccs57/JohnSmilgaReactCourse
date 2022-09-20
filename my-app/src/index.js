// CSS
import './index.css'

import { createRoot } from 'react-dom/client' //This is React 18 syntax
const container = document.getElementById('root');
const root = createRoot(container);

// Nested Components, React Tools
// Setup Vars
const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/81TFRojp+uL._AC_UY218_.jpg',
    title: 'Wheel of Time Box Set',
    author: 'Robert Jordan / Brandon Sanderson',
    altText: 'Wheel of Time Boxset',
  },

  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/51WEFBk27LL._AC_UY218_.jpg',
    title: 'Options Trading For Dummies',
    author: 'by Joe Duarte',
    altText: 'Options Trading for Dummies',
  },
  {
    id: 3,
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
          <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  );
}
const Book = ({ img, title, author, altText }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert('Hello World')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article className="book" onMouseOut={() => {
      console.log(title)
    }}>
      <img src={img} alt={altText} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Reference Example</button>
      <button type='button' onClick={() => complexExample(author)}>more complex example</button>
    </article>
  );
};




root.render(<BookList />);