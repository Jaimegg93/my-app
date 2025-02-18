import React, { act } from "react";
import {
  Col,
  Container,
  Stack,
  Row,
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardLink,
} from "react-bootstrap";
import { useState, useEffect } from "react";

function EjercicioBasico3Peliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [mostrarSinopsis, setMostarSinopsis] = useState(true);
  const [peliculaSinopsis, setPeliculaSinopsis] = useState(null);

  useEffect(() => {
    fetch("/peliculas (1).json")
      .then((response) => response.json())
      .then((data) => setPeliculas(data));
  }, []);

  if (peliculas.length === 0) {
    return <div>Cargando...</div>;
  }

  const handleClick = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
  };

  const mostrar = (pelicula) => {
    setMostarSinopsis(!mostrarSinopsis);
    setPeliculaSinopsis(pelicula);
  };

  const pelicula = peliculaSeleccionada || peliculas[0];

  return (
    <Container>
      <Row>
        <Col md={8} className="my-5">
          <img
            src={pelicula.foto}
            alt={pelicula.nombre}
            style={{ width: "100%", maxHeight: "1000px" }}
          />
        </Col>
        <Col md={4} className="my-5">
          <h1>{pelicula.titulo}</h1>
          <h2>{pelicula.director}</h2>
          <p>{pelicula.sinopsis}</p>
          {pelicula.actoresPrincipales.map((actor) => (
            <p>{actor}</p>
          ))}
        </Col>
      </Row>
      <Row>
        {peliculas.map((pelicula) => (
          <Col md={4} key={pelicula.id}>
            <Card>
              <CardImg
                src={pelicula.foto}
                alt={pelicula.nombre}
                style={{ maxHeight: "600px" }}
              />
              <CardHeader>{pelicula.titulo}</CardHeader>
              <CardBody>{pelicula.director}</CardBody>
              <CardBody>Actores:</CardBody>
              <ul>
                {pelicula.actoresPrincipales.map((actor) => (
                  <li> {actor}</li>
                ))}
              </ul>
              {peliculaSinopsis != null &&
              mostrarSinopsis &&
              peliculaSinopsis.sinopsis === pelicula.sinopsis ? (
                <>
                  <CardHeader className="card-title mt-3 ">Sinopsis</CardHeader>
                  <p className="card-body "> {peliculaSinopsis.sinopsis}</p>
                </>
              ) : null}
              <div>
                <CardLink
                  className="btn btn-warning ms-2 mb-3"
                  onClick={() => mostrar(pelicula)}
                  style={{ width: "48%" }}
                >
                  Ver más
                </CardLink>
                <CardLink
                  className="btn btn-primary mx-auto  mx-auto mb-3"
                  onClick={() => handleClick(pelicula)}
                  href="#"
                  style={{ width: "48%" }}
                >
                  Seleccionar
                </CardLink>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default EjercicioBasico3Peliculas;
