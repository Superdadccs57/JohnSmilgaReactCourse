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
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article className='book'>
    <Image />
    <Title />
    <Author/>
  </article>
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81TFRojp+uL._AC_UY218_.jpg"
    alt="Wheel of Time Boxset"
  />
);

const Title = () => <h1>Wheel of Time Box Set</h1>;

// This line has JSX-CSS added to the h4!
const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop:'.25rem'}}>Robert Jordan / Brandon Sanderson</h4>



root.render(<BookList />);