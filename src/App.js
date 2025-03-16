import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import React from "react";
import RoutersContexto from "./components/examen/WeatherRouter";
import MensajesRouter from "./components/mensajes/MensajesRouter";
import Quiniela from "./components/quiniela/Quiniela";
import ExamenRecuperacion from "./components/examenRecuperacion/pelis";

function App() {
  return (
    <>
      <ExamenRecuperacion />
    </>
  );
}

export default App;
