import estilo from './Card.module.css';

export default function Card(props) {
    return(
        <section>
                {
                    items.map(item => (
                        <p key={item.id}>
                            <img src={item.image} alt={item.titulo} />
                            {item.titulo} <br />
                            {item.genero} <br />
                            {item.sinopse} <br />
                            {item.ano} <br />
                            {item.estudio} <br />
                            
                        </p>
                    ))
                }
            </section>
    )
}