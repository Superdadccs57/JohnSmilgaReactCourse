// CSS
import './index.css'

import { createRoot } from 'react-dom/client' //This is React 18 syntax
const container = document.getElementById('root');
const root = createRoot(container);

// Nested Components, React Tools
// Setup Vars
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/81TFRojp+uL._AC_UY218_.jpg',
  title: 'Wheel of Time Box Set',
  author: 'Robert Jordan / Brandon Sanderson',
  altText: 'Wheel of Time Boxset',
};
const secondBook = {
  img: 'https://m.media-amazon.com/images/I/51WEFBk27LL._AC_UY218_.jpg',
  title: 'Options Trading For Dummies',
  author: 'by Joe Duarte',
  altText: 'Options Trading for Dummies',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        altText={firstBook.altText}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        altText={secondBook.altText}
      />
    </section>
  );
}
const Book = ({img,title,author,altText}) => {
  // const {img, title, author} = props
  return (
    <article className="book">
      <img src={img} alt={altText} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}




root.render(<BookList />);