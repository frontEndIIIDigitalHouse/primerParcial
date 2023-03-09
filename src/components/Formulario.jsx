import React, { useState } from "react";
import Card from "./Card";

function Formulario() {
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (nombre.trim().length < 3 || nombre.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    if (apellido.trim().length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    setError("");
    const cardData = { nombre, apellido };
    return <Card data={cardData} />;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setnombre(e.target.value)}
      />
      <br />
    
      <label htmlFor="apellido">Apellido:</label>
      <input
        type="text"
        id="apellido"
        value={apellido}
        onChange={(e) => setapellido(e.target.value)}
      />
      <br />

      <button type="submit">Enviar</button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default Formulario;