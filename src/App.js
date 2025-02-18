import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ListGroup, Navbar, Nav, NavDropdown } from "react-bootstrap";
import EjercicioBasicoLayout1 from "./components/EjercicioBasicoLayout1";
import EjercicioBasicoLayout2 from "./components/EjercicioBasicoLayout2";
import EjercicioBasicoLayout3 from "./components/EjercicioBasico3Peliculas";
import EjercicioBasicoLayout4 from "./components/EjercicioBasico4NavBar";
import Routers from "./components/routers/routers";
import NewList from "./components/noticias/NewList";

function App() {
  return (
    <>
      <NewList />
    </>
  );
}

export default App;
