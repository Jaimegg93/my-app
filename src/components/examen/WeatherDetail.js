import React, { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useParams } from "react-router";

function WeatherDetail() {
  const [weather, setWeather] = useState([]);
  const [ciudadSelecionada, setCiudadSelecionada] = useState(null);
  const { nombreCiudad } = useParams();

  useEffect(() => {
    fetch("/weather.json")
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  if (weather.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {weather.ciudades.map((ciudad) => (
        <>
          {ciudad.nombre == nombreCiudad && (
            <Container>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Temperatura Maxima</th>
                    <th>Temperatura MInima</th>
                    <th>Velocidad del viento</th>
                    <th>Direccion del viento</th>
                    <th>LLuvia</th>
                    <th>Salida del sol</th>
                    <th>Puesta del sol</th>
                  </tr>
                </thead>
                <tbody>
                  {ciudad.fechas.map((fecha) => (
                    <tr>
                      <td>{fecha.fecha}</td>
                      <td>{fecha.temperatura.maxima}</td>
                      <td>{fecha.temperatura.minima}</td>
                      <td>{fecha.viento.velocidad}</td>
                      <td>{fecha.viento.direccion}</td>
                      <td>{fecha.lluvia}</td>
                      <td>{fecha.sol.salida}</td>
                      <td>{fecha.sol.puesta}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          )}
        </>
      ))}
    </div>
  );
}
export default WeatherDetail;
