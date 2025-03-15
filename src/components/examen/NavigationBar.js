import { Navbar, Container, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router";
import React from "react";
import { useContext } from "react";

import { WeatherContext } from "./WeatherContext";

function NavigationBar() {
  const { weather } = useContext(WeatherContext);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ListadoDeCiudades</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Ciudades">
              {weather.ciudades.map((ciudad) => (
                <NavDropdown.Item title="Inicio" as={Link} to={"/WeatherDetail/" + ciudad.nombre}>
                  {ciudad.nombre}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default NavigationBar;
