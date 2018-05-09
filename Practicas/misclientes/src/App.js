import React, { Component } from 'react';
//import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';

//Componentes
import Navegador from './componentes/Navegador';
import TablaClientes from './componentes/TablaClientes';
import FormClientes from './componentes/FormClientes';

class App extends Component {
  render() {
    return (
      <div>
          <Navegador/>
          <Grid>
            <Row>
              <Col md={12} xs={12}>
                <FormClientes/>
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
