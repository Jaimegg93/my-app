import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  Container,
  Row,
  Col,
  Button,
  Carousel,
  CardTitle,
  Nav,
  Navbar,
  NavLink,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router";

function WeatherList() {
  const [weather, setWeather] = useState([]);
  const [ciudadSelecionada, setCiudadSelecionada] = useState(null);
  const [rutaImagen, setRutaImagen] = useState("");

  useEffect(() => {
    fetch("/weather.json")
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  if (weather.length === 0) {
    return <div>Cargando...</div>;
  }

  const selecionarCiudad = (ciudad) => {
    setCiudadSelecionada(ciudad);
  };
  return (
    <div>
      <Container>
        {ciudadSelecionada != null ? (
          <Carousel>
            {ciudadSelecionada.fechas.map((fecha) => (
              <Carousel.Item>
                <Card>
                  <Card.Img src={ciudadSelecionada.nombre + ".jpg"}></Card.Img>
                  <Card.Header>{ciudadSelecionada.nombre}</Card.Header>
                  <CardBody>
                    <CardText>{fecha.fecha}</CardText>
                    <CardText>Temperatura</CardText>
                    <CardText>Maxmima {fecha.temperatura.maxima}</CardText>
                    <CardText>Minima {fecha.temperatura.minima}</CardText>
                    <CardText>Viento</CardText>
                    <Card.Text>Velocidad: {fecha.viento.velocidad}</Card.Text>
                    <Card.Text>Direccion: {fecha.viento.direccion}</Card.Text>
                  </CardBody>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Carousel>
            {weather.ciudades[0].fechas.map((fecha) => (
              <Carousel.Item>
                <Card>
                  <Card.Img src={weather.ciudades[0].nombre + ".jpg"}></Card.Img>
                  <Card.Header>{weather.ciudades[0].nombre}</Card.Header>
                  <CardBody>
                    <CardText>{fecha.fecha}</CardText>
                    <CardText>Temperatura</CardText>
                    <CardText>Maxmima {fecha.temperatura.maxima}</CardText>
                    <CardText>Minima {fecha.temperatura.minima}</CardText>
                    <Card.Text>Velocidad: {fecha.viento.velocidad}</Card.Text>
                    <Card.Text>Direccion: {fecha.viento.direccion}</Card.Text>
                  </CardBody>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        {weather.ciudades.map((ciudad) => (
          <Card>
            <CardBody>
              <CardTitle>{ciudad.nombre}</CardTitle>
              <Button onClick={() => selecionarCiudad(ciudad)}>Seleccionar</Button>
            </CardBody>
          </Card>
        ))}
      </Container>
    </div>
  );
}
export default WeatherList;
