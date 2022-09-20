import './Contador.css'
import { useState } from "react";

const Contador = () => {

const [contar, setContar] = useState(0);

function incrementarContar() {
    setContar(contar + 1);
}
function decrementarContar() {
    setContar(contar - 1);
}

    return ( 
        <>
        <div className="general">
        <h1>Contador - Desafío 6</h1>
        <div className="contenedor">
        <button className="boton1" onClick={decrementarContar}>-</button>
        <p>{contar}</p>
        <button className="boton2" onClick={incrementarContar}>+</button>
        </div>
        </div>
        </>
     );
}
 
export default Contador;