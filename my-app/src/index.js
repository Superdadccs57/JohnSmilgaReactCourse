import { createRoot } from 'react-dom/client' //This is React 18 syntax
const container = document.getElementById('root');
const root = createRoot(container);

// Nested Components, React Tools

function BookList() {
  return <section>
    <Book />
  </section>;
}

const Book = () => {
  return <article>
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
const Author = () => <h4>Robert Jordan / Brandon Sanderson</h4>



root.render(<BookList />);