import React from "react";

export default function InfosUsuario() {
  const usuario1 = {
    nome: "Usuario 1",
    foto: "https://picsum.photos/id/64/100/100",
  };

  const usuario2 = {
    nome: "Usuario 2",
    foto: "https://picsum.photos/id/64/100/100",
  };

  const usuario3 = {
    nome: "Usuario 3",
    foto: "https://picsum.photos/id/64/100/100",
  };

  const usuario4 = {
    nome: "Usuario 4",
    foto: "https://picsum.photos/id/64/100/100",
  };

  const usuario5 = {
    nome: "Usuario 5",
    foto: "https://picsum.photos/id/64/100/100",
  };

  const usuario6 = {
    nome: "Usuario 6",
    foto: "https://picsum.photos/id/64/100/100",
  };

  const usuario7 = {
    nome: "Usuario 7",
    foto: "https://picsum.photos/id/64/100/100",
  };

  const usuario8 = {
    nome: "Usuario 8",
    foto: "https://picsum.photos/id/64/100/100",
  };

  return (
    <div className="info-usuarios">
      <CardVideo usuario={usuario1} />
      <CardVideo usuario={usuario2} />
      <CardVideo usuario={usuario3} />
      <CardVideo usuario={usuario4} />
      <CardVideo usuario={usuario5} />
      <CardVideo usuario={usuario6} />
      <CardVideo usuario={usuario7} />
      <CardVideo usuario={usuario8} />
    </div>
  );
}
