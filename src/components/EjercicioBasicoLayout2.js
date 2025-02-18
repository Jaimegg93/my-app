import React from "react";
import { Stack } from "react-bootstrap";

export default function EjercicioBasicoLayout2() {
  return (
    <Stack className="mx-auto" direction="horizontal" style={{ alignItems: "start" }}>
      <div className="m-5 mx-auto bg-primary" style={{ width: "60%" }}>
        <Stack direction="vertical">
          <div className=" bg-warning d-flex align-items-center justify-content-center" style={{ height: "550px" }}>
            Elemento Grande
          </div>
          <div className="mt-5 bg-warning" style={{ height: "250px" }}>
            Elemento 2 en el grupo 1
          </div>
        </Stack>
      </div>

      <div className="bg-secondary text-white mt-5" style={{ width: "250px" }}>
        <Stack direction="vertical">
          <div className="mb-5 bg-warning" style={{ height: "250px" }}>
            Elemento pequeño 1.1
          </div>
          <div className="mb-5 bg-warning" style={{ height: "250px" }}>
            Elemento pequeño 2.1
          </div>
          <div className=" bg-warning" style={{ height: "250px" }}>
            Elemento pequeño 3.1
          </div>
        </Stack>
      </div>

      <div className="bg-success text-white mx-auto mt-5" style={{ width: "250px" }}>
        <Stack direction="vertical">
          <div className="mb-5 bg-warning" style={{ height: "250px" }}>
            Elemento pequeño 1.2
          </div>
          <div className="mb-5 bg-warning" style={{ height: "250px" }}>
            Elemento pequeño 2.2
          </div>
          <div className=" bg-warning" style={{ height: "250px" }}>
            Elemento pequeño 3.2
          </div>
        </Stack>
      </div>
    </Stack>
  );
}
