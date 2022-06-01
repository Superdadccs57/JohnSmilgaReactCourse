import { createRoot } from 'react-dom/client' //This is React 18 syntax
const container = document.getElementById('root');
const root = createRoot(container);

// Nested Components, React Tools

function Greeting() {
  return (
    <div>
      <h1>So you can create componets outside of the greeting component and then use them inside of any component you want! Pretty Cool </h1>
      <Person />
      <Message />
    </div>
  );  
}

const Person = () => <h2>Thomas Fentie</h2>;
const Message = () => {
  return <p>Hi I am learning React</p>
}


root.render(<Greeting />);