import React from 'react';
import ReactDOM from 'react-dom';

const MiComponente = () => {
    return <h1>Mi primer Componente en ReactJs</h1>
}


//ReactDOM.render(<h1>Hola Mundo</h1>, document.getElementById('root'));
ReactDOM.render(<MiComponente/>, document.getElementById('root'));