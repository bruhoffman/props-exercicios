import React from "react";

export default function InfosUsuario(props) {
  return (
    <div className="info-usuarios">
      <img src={props.userImg} />
      <p>{props.userNome}</p>
    </div>
  )
}
