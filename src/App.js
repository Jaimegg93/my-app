import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ListGroup, Navbar, Nav, NavDropdown } from "react-bootstrap";
import EjercicioBasicoLayout1 from "./components/ejercicios basicos/EjercicioBasicoLayout1";
import EjercicioBasicoLayout2 from "./components/ejercicios basicos/EjercicioBasicoLayout2";
import EjercicioBasicoLayout3 from "./components/ejercicios basicos/EjercicioBasico3Peliculas";
import EjercicioBasicoLayout4 from "./components/ejercicios basicos/EjercicioBasico4NavBar";
import Routers from "./components/noticias/NewsRouter";
import NewList from "./components/noticias/NewList";
import ExamenRecuperacion from "./components/examenRecuperacion/pelis";

function App() {
  return (
    <>
      <Routers />
    </>
  );
}

export default App;
