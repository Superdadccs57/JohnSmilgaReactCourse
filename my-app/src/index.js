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
]

const names = ['john', 'peter', 'susan']
const newName = names.map((name) => {
  return <h1>{name}</h1>
});
console.log(newName)
function BookList() {
  return (
    <section className="booklist">
      {newName}
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