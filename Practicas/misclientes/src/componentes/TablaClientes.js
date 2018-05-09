import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
class TablaClientes extends Component {
    render() {
        return(
            <div>
                <Row>
                    <Col md={12} sm={12}>
                        <h3>Lista de Clientes</h3>
                    </Col>
                    <hr/>
                </Row>
                <Row>
                    <Col md={12} sm={12}>
                        <Table striped bordered condensed hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre Completo</th>
                                    <th>Direccion</th>
                                    <th>Telefono</th>
                                    <th>Operaciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Editar | Borrar</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Editar | Borrar</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Larry the Bird</td>
                                    <td>Thornton</td>
                                    <td>@twitter</td>
                                    <td>Editar | Borrar</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={12}>
                        <Button bsStyle="primary">Nuevo Cliente</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TablaClientes;