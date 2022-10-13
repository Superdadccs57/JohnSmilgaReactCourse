import { createRoot } from 'react-dom/client' //This is React 18 syntax
// CSS
import './index.css'
// Book Array
import {data} from './books'
// Book Component
import Book from './book'

const container = document.getElementById('root');
const root = createRoot(container);

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return( 
          <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  );
}

// Rendering the Page in the browser
root.render(<BookList />);