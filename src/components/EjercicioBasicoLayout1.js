import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Stack } from "react-bootstrap";
import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ListGroup, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function EjercicioBasicoLayout1() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6} xl={4} className="mx-auto text-center bg-danger ">
          Mujeres
        </Col>
        <Col sm={12} md={6} xl={4} className="mx-auto text-center bg-success">
          Hombres
        </Col>
        <Col sm={12} md={6} xl={4} className="mx-auto text-center bg-primary">
          Niños
        </Col>
      </Row>
    </Container>
  );
}
