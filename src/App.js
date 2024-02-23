import React from "react";
import "./styles.css";
import CardVideo from "./Componentes/CardVideo";
import InfosUsuario from "./Componentes/InfosUsuario";

export default function App() {
  const video1 = {
    titulo: "Título 1",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video2 = {
    titulo: "Título 2",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video3 = {
    titulo: "Título 3",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video4 = {
    titulo: "Título 4",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video5 = {
    titulo: "Título 5",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video6 = {
    titulo: "Título 6",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video7 = {
    titulo: "Título 7",
    imagem: "https://picsum.photos/400/400?a=1",
  };

  const video8 = {
    titulo: "Título 8",
    imagem: "https://picsum.photos/400/400?a=1",
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
            <CardVideo video={video1} />
            <CardVideo video={video2} />
            <CardVideo video={video3} />
            <CardVideo video={video4} />
            <CardVideo video={video5} />
            <CardVideo video={video6} />
            <CardVideo video={video7} />
            <CardVideo video={video8} />
          </section>
        </main>

        <footer>
          <h4>Copyright © 2022 Labenu All rights reserved.</h4>
        </footer>
      </div>
    </div>
  );
}
