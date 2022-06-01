import React from 'react'
import ReactDOM from 'react-dom';

// stateless functional component
// always  need to return the JSX
// |
// V


function Greeting() {
  return (
    <div>
      <h1>This Heading is nested in a <code>div</code> </h1>
    </div>
  );  
}

// The method below works well for normal html, however will become very messy when introducing nested elements, Like the above code

// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hello World!');
// }

ReactDOM.render(<Greeting/>,document.getElementById('root'))