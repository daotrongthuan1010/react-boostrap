import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Head() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">MinhThuan_Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Địa Điểm</Nav.Link>
            <Nav.Link href="#">Giá Vé</Nav.Link>
            <Nav.Link href="#">Ưu Đãi</Nav.Link>
            <Nav.Link href="#">Mua Sắm</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;