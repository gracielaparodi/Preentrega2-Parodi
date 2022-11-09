import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


import React from "react";
import ShoppingCart from './Assets/Imagenes/shopping-cart.png';
import logo from "../components/Assets/Imagenes/logo.png";

export default function Navbar1({ color }) {


    console.log(color);

    return (
        <div style={{ backgroundColor: color }}>

            <Navbar>
                <Container fluid>
                    <div class="logopage"><img src={logo} className="App-logo" alt="logo" width={80} /></div>
                    <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link as={Link} to="/category/maquillaje">Maquillajes</Nav.Link>
                        <Nav.Link as={Link} to="/category/skincare">Skincare</Nav.Link>
                        <Nav.Link as={Link} to="/category/beautytools">Beauty Tools</Nav.Link>
                        <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Nav.Link as={Link} to="/Carrito"> <a href="Cart"> <img class="carrito" src={ShoppingCart} width={40} alt="Carrito" /></a></Nav.Link>

                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="btn btn-outline-light">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div >
    );
}