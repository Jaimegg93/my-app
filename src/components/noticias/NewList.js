import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, CardText, Container, Row, Col } from "react-bootstrap";

function NewList() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch("/noticias.json")
      .then((response) => response.json())
      .then((data) => setNoticias(data));
  }, []);

  return (
    <Container className="my-5">
      <Row>
        {noticias.map((noticia) => (
          <Col md={4}>
            <Card key={noticia.id} className="mb-3">
              <Card.Header className="bg-warning fw-bold">{noticia.titulo}</Card.Header>
              <Card.Body>
                <Card.Text>{noticia.contenido}</Card.Text>
                <Card.Text>{noticia.categoria}</Card.Text>
                <Card.Text>{noticia.autor}</Card.Text>
                <Card.Text>{noticia.fecha}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default NewList;
