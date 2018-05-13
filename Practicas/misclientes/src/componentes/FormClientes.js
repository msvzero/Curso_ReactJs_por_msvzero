import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
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
    constructor(){
        super();
        this.state = {
            nombre: '',
            direccion: '',
            telefono: ''
        }
        this.guardarCliente = this.guardarCliente.bind(this);
    }

    guardarCliente(){
        //console.log(this.state);
        //Enviamos la peticion post
        let clienteNuevo = {
            nombre: this.state.nombre,
            direccion: this.state.direccion,
            telefono: this.state.telefono
        }
        let { id } = this.props.match.params;
        let url = '';
        let method =''
        if(id){
            url = `http://localhost:3000/clientes/update/${id}`;
            method = 'PUT';
        }else{
            url = 'http://localhost:3000/clientes/nuevo';
            method = 'POST';
        }

       fetch(url,{
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clienteNuevo)
        })
        .then((response) => response.json())
        .then((clienteInsertado) => {
            alert(`Se inserto el cliente: ${clienteInsertado.nombre}`);
        }).catch((error) => {
            console.log(error);
        })
    }
    componentDidMount(){
        let { id } = this.props.match.params;
        console.log(id);
        if(id){
            fetch(`http://localhost:3000/clientes/busqueda/${id}`,{
                method: 'GET'
            })
            .then((response) => response.json())
            .then((datos) => {
                console.log(datos);
                this.setState({
                    nombre: datos.nombre,
                    direccion: datos.direccion,
                    telefono: datos.telefono
                })
            })
        }
    }
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
                                <FormControl type="text"   value= {this.state.nombre}placeholder="Introduzca su nombre" onChange={(event) => this.setState({nombre: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Direccion</ControlLabel>
                                <FormControl type="text" value= {this.state.direccion} placeholder="Tu direccion" onChange={(event) => this.setState({direccion: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Numero Telefonico</ControlLabel>
                                <FormControl type="text"  value= {this.state.telefono} placeholder="Linea baja o celular" onChange={(event) => this.setState({telefono: event.target.value})}/>
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} xs={12}>
                        <ButtonToolbar>
                            <Button bsStyle="primary" onClick={() => this.guardarCliente()}>Guardar</Button>
                            <LinkContainer to="/clientes"><Button bsStyle="danger">Volver</Button></LinkContainer>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default FormClientes;