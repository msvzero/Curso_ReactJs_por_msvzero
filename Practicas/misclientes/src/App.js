import React, { Component } from 'react';
//import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//Componentes
import Navegador from './componentes/Navegador';
import Dashboard from './componentes/Dashboard';
import TablaClientes from './componentes/TablaClientes';
import FormClientes from './componentes/FormClientes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Navegador/>
            <Grid>
              <Row>
                <Col md={12} xs={12}>
                  <Route exact path="/" component={Dashboard}/>
                  <Route exact path="/clientes" component={TablaClientes} />
                  <Route path="/clientes/nuevo" component={FormClientes}/>
                  <Route path="/clientes/editar/:id" component={FormClientes} />
                </Col>
              </Row>
            </Grid>
        </div>
      </Router>
      
    );
  }
}

export default App;
