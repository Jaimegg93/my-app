import React, { act } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardLink,
  Nav,
  Navbar,
  NavDropdown,
  CardText,
} from "react-bootstrap";
import { useState, useEffect } from "react";

function EjercicioBasico4NavBar() {
  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [mostrarSinopsis, setMostarSinopsis] = useState(true);
  const [peliculaSinopsis, setPeliculaSinopsis] = useState(null);
  const [generos, setGeneros] = useState([]);
  const [directores, setDirectores] = useState([]);

  useEffect(() => {
    fetch("/peliculas (1).json")
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data);
        setGeneros(extractGeneros(data));
        setDirectores(extractDirectores(data));
      });
  }, []);

  const extractGeneros = (data) => {
    const generosUnicos = [];
    data.forEach((pelicula) => {
      if (Array.isArray(pelicula.categoria)) {
        pelicula.categoria.forEach((categoria) => {
          if (!generosUnicos.includes(categoria)) {
            generosUnicos.push(categoria);
          }
        });
      } else {
        if (!generosUnicos.includes(pelicula.categoria)) {
          generosUnicos.push(pelicula.categoria);
        }
      }
    });
    return generosUnicos;
  };

  const extractDirectores = (data) => {
    const directoresUnicos = [];
    data.forEach((pelicula) => {
      if (!directoresUnicos.includes(pelicula.director)) {
        directoresUnicos.push(pelicula.director);
      }
    });
    return directoresUnicos;
  };

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
    <div>
      <Navbar bg="warning" variant="">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/Palace-Logo.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>{" "}
          <Nav className="me-auto">
            <NavDropdown title="Categorías " id="basic-nav-dropdown">
              {generos.map((genero) => (
                <NavDropdown.Item href="#action/3.1">{genero}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Directores" id="basic-nav-dropdown">
              {directores.map((director) => (
                <NavDropdown.Item href="#action/3.1">
                  {director}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
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
                <CardBody>
                  <CardHeader>{pelicula.titulo}</CardHeader>
                  <CardText>{pelicula.director}</CardText>
                  <CardText>Actores:</CardText>
                  <ul>
                    {pelicula.actoresPrincipales.map((actor) => (
                      <li> {actor}</li>
                    ))}
                  </ul>

                  {peliculaSinopsis != null &&
                  mostrarSinopsis &&
                  peliculaSinopsis.sinopsis === pelicula.sinopsis ? (
                    <>
                      <CardText className="card-title mt-3 ">Sinopsis</CardText>
                      <CardText className="card-body ">
                        {" "}
                        {peliculaSinopsis.sinopsis}
                      </CardText>
                    </>
                  ) : null}
                </CardBody>
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
    </div>
  );
}
export default EjercicioBasico4NavBar;
