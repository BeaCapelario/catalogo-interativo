import { useState } from "react";
import { itensInicio } from "./data/items.js";
import Cabecalho from "./components/Cabecalho.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as iconeFavoritar } from '@fortawesome/free-regular-svg-icons';
import { faHeart as iconeDesfavoritar } from '@fortawesome/free-solid-svg-icons';

// Componente Card (Sem o 'default' para não dar erro)
function Card({ item }) {
  const [favorito, setFavorito] = useState(false);

  function mudarFavorito() {
    setFavorito(!favorito);
  }

  return (
    <article className="card">
      <div className="card-image-container">
        <img src={item.image} alt={item.titulo} className="card-img" />
        <button className="btn-favoritar" onClick={mudarFavorito}>
          <FontAwesomeIcon 
            icon={favorito ? iconeDesfavoritar : iconeFavoritar} 
            color={favorito ? "red" : "black"}
          />
        </button>
      </div>

      <div className="card-info">
        <h3>{item.titulo}</h3>
        
        <div className="info-group">
          <span>Gênero:</span>
          <p>{item.genero}</p>
        </div>

        <div className="info-group">
          <span>Sinopse:</span>
          <p>{item.sinopse}</p>
        </div>

        <div className="info-group">
          <span>Estúdio:</span>
          <p>{item.estudio}</p>
        </div>

        <div className="info-group">
          <span>Ano:</span>
          <p>{item.ano}</p>
        </div>
      </div>
    </article>
  );
}

// Componente Principal (O ÚNICO com export default)
export default function App() {
  const [items] = useState(itensInicio);

  return (
    <div className="app-container">
      <Cabecalho />
      
      <main>
        <section className="card-container">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}