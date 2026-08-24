import Item from "../item/Item";
import '../list/list.css';

export default function List({usuarios, refrescarCambios}){
    return (
        <div className="contenedor__list">
            {
                usuarios.map(usuario =>  <Item key={usuario.id} usuario={usuario} refrescarCambios={refrescarCambios} />)
            }
        </div>
    )
}