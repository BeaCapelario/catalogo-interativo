
import { itensInicio } from "./data/items.js";
import { useState } from "react";

export default function App(){
    const [items, setItems] = useState(itensInicio);

    return(
        <main>
            <header>
                <h1>Animezinhos</h1>
            </header>

            <section>
                {
                    items.map(item => (
                        <p>
                            {item.id} <br />
                            {item.titulo} <br />
                            {item.genero} <br />
                            {item.sinopse} <br />
                            {item.ano} <br />
                            {item.estudio} <br />
                            <img src={item.image} />
                        </p>
                    ))
                }
            </section>
        </main>
    )
}
