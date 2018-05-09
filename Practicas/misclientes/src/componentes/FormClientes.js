import React, { Component } from 'react';
import { 
    Row,
    Col,
    Form, 
    FormGroup, 
    FormControl, 
    ControlLabel, 
    ButtonToolbar, 
    Button } from 'react-bootstrap';
class FormClientes extends Component {
    render() {
        return(
            <div>
                <Row>
                    <Col md={8} xs={12}>
                       <h3>Nuevo Cliente</h3>
                    </Col>
                    <hr/>
                </Row>
                <Row>
                    <Col md={8} xs={12}>
                        <form>
                            <FormGroup>
                                <ControlLabel>
                                    Nombre Completo
                                </ControlLabel>
                                <FormControl type="text" placeholder="Introduzca su nombre" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Direccion</ControlLabel>
                                <FormControl type="text" placeholder="Tu direccion"/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Numero Telefonico</ControlLabel>
                                <FormControl type="text" placeholder="Linea baja o celular"/>
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} xs={12}>
                        <ButtonToolbar>
                            <Button bsStyle="primary">Guardar</Button>
                            <Button bsStyle="danger">Volver</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default FormClientes;