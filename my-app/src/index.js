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

const Book = () => {
  return <article className='book'>
    
    <img
        src="https://m.media-amazon.com/images/I/81TFRojp+uL._AC_UY218_.jpg"
        alt="Wheel of Time Boxset"
      />
    
    
  <h1>Wheel of Time Box Set</h1>
    
    
    <h4>Robert Jordan / Brandon Sanderson</h4>
  </article>
}




root.render(<BookList />);