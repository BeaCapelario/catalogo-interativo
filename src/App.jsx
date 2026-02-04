import { itensInicio } from "./data/items.js";
import { useState } from "react";
import Cabecalho from "./components/Cabecalho.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';

export default function App(){
    const [items, setItems] = useState(itensInicio);

    return(
        <main>
            <Cabecalho />
            
            <section className="card-container">
                {
                    items.map(item => (
                        <div className="card">
                        <p key={item.id}>
                            <img src={item.image} alt={item.titulo} />
                            <h3>{item.titulo}</h3> <br />
                            <p>{item.genero}</p> <br />
                            <p>{item.sinopse} </p><br />
                            <p>{item.ano}</p><br />
                            <p>{item.estudio}</p> <br />
                        </p>
                        </div>
                    ))
                }
            </section>

            <Footer />
        </main>
    )
}
