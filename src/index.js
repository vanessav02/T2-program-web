import React from 'react'; //para poder utilizar JSX(HTML+JS)
import ReactDOM from 'react-dom'; //linkar a aplicação ao arquivo index.html
import './index.css';
import App from './components/App'; //importação de componente


ReactDOM.render(<App />, document.getElementById('root')); //renderizando o componente App dentro da div root
