import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import CartWidget from "./CartWidget";
import logo from '../components/Assets/Imagenes/logo.png';
export default function Navbar1({ conBoton, color, funcionLogin }) {


    console.log(color);

    return (
        <div style={{ backgroundColor: color }}>

            <img src={logo} className="App-logo" alt="logo" width={80} />



            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="Inicio">Inicio</Navbar.Brand>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="Maquillaje">Maquillaje</Nav.Link>
                        <Nav.Link href="Skincare">Skincare</Nav.Link>
                        <Nav.Link href="Beauty tools">Beauty tools</Nav.Link>

                        <CartWidget />
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Container>
            </Navbar>



        </div >

    );
}
