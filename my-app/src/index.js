import ReactDOM  from 'react-dom';

function Greeting() {
  return <h4>This is Thomas and this is my first component!</h4>;
}

ReactDOM.render(<Greeting/>,document.getElementById('root'))