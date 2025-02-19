import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function Tablee() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simula la obtención de datos de un archivo JSON
    const jsonData = [
      { id: 1, nombre: "Mark", apellido: "Otto", edad: 28 },
      { id: 2, nombre: "Jacob", apellido: "Thornton", edad: 35 },
      { id: 3, nombre: "Larry", apellido: "the Bird", edad: 42 },
    ];

    setData(jsonData);
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.apellido}</td>
            <td>{item.edad}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Tablee;
