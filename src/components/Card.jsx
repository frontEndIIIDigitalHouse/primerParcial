import React from "react";

function Card({ data }) {
  return (
    <div>
      <p>Nombre: {data.nombre}</p>
      <p>Apellido: {data.apellido}</p>
    </div>
  );
}

export default Card;