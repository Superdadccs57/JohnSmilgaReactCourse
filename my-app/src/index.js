// CSS
import './index.css'

import { createRoot } from 'react-dom/client' //This is React 18 syntax
const container = document.getElementById('root');
const root = createRoot(container);

// Nested Components, React Tools



function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}
const author = 'Robert Jordan / Brandon Sanderson';
const Book = () => {
  const title = 'Wheel of Time Box Set';
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81TFRojp+uL._AC_UY218_.jpg"
        alt="Wheel of Time Boxset"
      />

      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{ let x = 6}</p> cannot have a statment, needs to return a value*/}
    </article>
  );
}




root.render(<BookList />);