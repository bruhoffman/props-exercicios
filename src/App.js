import React from "react";
import "./styles.css";
import CardVideo from "./Componentes/CardVideo";


export default function App() {
  const video1 = {
    titulo: "Vídeo 1",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video2 = {
    titulo: "Vídeo 2",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video3 = {
    titulo: "Vídeo 3",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video4 = {
    titulo: "Vídeo 4",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video5 = {
    titulo: "Vídeo 5",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video6 = {
    titulo: "Vídeo 6",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video7 = {
    titulo: "Vídeo 7",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video8 = {
    titulo: "Vídeo 8",
    imagem: "https://picsum.photos/400/400?a=1",
  };

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
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo video={video1} usuario={usuario1} />
            <CardVideo video={video2} usuario={usuario2} />
            <CardVideo video={video3} usuario={usuario3} />
            <CardVideo video={video4} usuario={usuario4} />
            <CardVideo video={video5} usuario={usuario5} />
            <CardVideo video={video6} usuario={usuario6} />
            <CardVideo video={video7} usuario={usuario7} />
            <CardVideo video={video8} usuario={usuario8} />
          </section>
        </main>

        <footer>
          <h4>Copyright © 2022 Labenu All rights reserved.</h4>
        </footer>
      </div>
    </div>
  );
}
