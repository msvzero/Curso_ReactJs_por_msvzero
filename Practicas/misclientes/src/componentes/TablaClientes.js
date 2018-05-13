import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { LinkContainer, Link } from 'react-router-bootstrap'; 
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css



class TablaClientes extends Component {
    constructor(){
        super();
        this.state = {
            clientes: []
        }
        this.obtenerClientes = this.obtenerClientes.bind(this);
        this.confirmarEliminacion = this.confirmarEliminacion.bind(this);
        this.eliminaCliente = this.eliminaCliente.bind(this);
        
    }
    componentWillMount(){
       this.obtenerClientes();
    }
    obtenerClientes(){
        fetch('http://localhost:3000/clientes',{
            method: 'GET'
        })
        .then((response) =>  response.json())
        .then((datos) => {
            this.setState({clientes: datos});
            console.log(this.state.clientes)
        });
    }
    confirmarEliminacion(id){
        confirmAlert({
            title: 'Confirmar accion',
            message: 'Esta seguro de eliminar?.',
            buttons: [
              {
                label: 'Si',
                onClick: () => {this.eliminaCliente(id)}
              },
              {
                label: 'No',
              }
            ]
          })
    }
    eliminaCliente(id) {
        fetch(`http://localhost:3000/cliente/delete/${id}`, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then((datos) => {
            console.log('Cliente eliminado', datos);
            this.obtenerClientes();
        })
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
                                            <a onClick={() => this.confirmarEliminacion(cliente._id)}>Borrar</a>
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