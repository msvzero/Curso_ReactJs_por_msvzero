import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
class Navegador extends Component {
    render(){
        return(
           <Row>
                <Col lg={12}>
                    <Navbar collapseOnSelect fluid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#brand">React-Bootstrap</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <LinkContainer exact to="/"><NavItem>Inicio</NavItem></LinkContainer>
                                <LinkContainer to="/clientes"><NavItem>Clientes</NavItem></LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            
        )
    }
}
export default Navegador;