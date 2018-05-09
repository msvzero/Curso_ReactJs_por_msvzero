import React, { Component } from 'react';
//import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';

//Componentes
import Navegador from './componentes/Navegador';

class App extends Component {
  render() {
    return (
      <div>
          <Navegador/>
          <Grid>
            <Row>
              <Col md={12}>
                <h2>Contenido dinamico</h2>
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
