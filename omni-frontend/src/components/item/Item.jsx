import Button from "../button/Button";
import '../item/item.css';

export default function Item({usuario, refrescarCambios}){
    return (
        <div className="contenedor__item">
            <span>{usuario.id}</span>
            <div className="seccion">
                <p>{usuario.nombre}</p>
                <Button id={usuario.id} refrescarCambios={refrescarCambios} />
            </div>
        </div>
    )
}