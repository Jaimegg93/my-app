// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/Redes.js
import React from "react";
import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { Card, CardHeader, Container } from "react-bootstrap";

function NewsDetail() {
    const [noticias, setNoticias] = useState([]);
    const { newid } = useParams();

    useEffect(() => {
        fetch("/noticias.json")
            .then((response) => response.json())
            .then((data) => setNoticias(data));
    }, []);


    return (
        <Container className="my-5 ">
            {noticias.map((noticia) => (
                noticia.titulo == newid && (
                    <Card key={noticia.id} className="mb-3">
                        <Card.Body>
                            <h1>{noticia.titulo}</h1>
                            <Card.Subtitle>{noticia.categoria} |  {noticia.autor}</Card.Subtitle>
                            <Card.Text>{noticia.fecha}</Card.Text>
                            <Card.Text>{noticia.contenido}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            ))}
            <Link className="btn btn-warning justify-content-center" to="/NewList">
                Volver
            </Link>
        </Container>
    );
}

export default NewsDetail;
