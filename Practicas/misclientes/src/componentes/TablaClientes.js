import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { LinkContainer, Link } from 'react-router-bootstrap'; 
class TablaClientes extends Component {
    constructor(){
        super();
        this.state = {
            clientes: []
        }
    }
    componentWillMount(){
        fetch('http://localhost:3000/clientes',{
            method: 'GET'
        })
        .then((response) =>  response.json())
        .then((datos) => {
            this.setState({clientes: datos});
            console.log(this.state.clientes)
        });
    }
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
                            {
                                this.state.clientes.map((cliente, index) => {
                                    let indice = index + 1;
                                    return(
                                        <tr key={cliente._id}>
                                            <td>{indice}</td>
                                            <td>{cliente.nombre}</td>
                                            <td>{cliente.direccion}</td>
                                            <td>{cliente.telefono}</td>
                                            <td>
                                            <LinkContainer to={`/clientes/editar/${cliente._id}`}><a>Editar</a></LinkContainer>
                                            {' | '}
                                            <a onClick={() => alert("Se borrara este cliente")}>Borrar</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                               
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={12}>
                        <LinkContainer to="/clientes/nuevo"><Button bsStyle="primary">Nuevo Cliente</Button></LinkContainer>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TablaClientes;