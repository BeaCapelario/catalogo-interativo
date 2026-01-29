import estilo from './Cabecalho.module.css';

export function Cabecalho() {
    return (
        <header className={estilo.cabecalho}>
            <h1 className={estilo.titulo}>Sherlock Holmes</h1>
        </header>
    )
}