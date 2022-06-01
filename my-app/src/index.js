import React from 'react'
import ReactDOM from 'react-dom';

// JSX Rules
// return single element
// div / section / article or fragment
// use camelCase for html attributes
// className instead of class
// close every element
// formatting


function Greeting() {
  return (
    <div>
      <h1>This Heading is nested in a <code>div</code> </h1>
    </div>
  );  
}



ReactDOM.render(<Greeting/>,document.getElementById('root'))