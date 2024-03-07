import React from "react";
import InfosUsuario from "./InfosUsuario";

export default function CardVideo({ video, usuario }) {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  console.log(usuario);

  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={video.imagem} alt="" />
      <h4>{video.titulo}</h4>
      <InfosUsuario userImg={usuario.foto} userNome={usuario.nome} />
    </div>
  );
}
