import { useFetch } from '../../hook/useFetch';
import '../button/button.css';

export default function Button({id, refrescarCambios}){

    const [ dataApi ] = useFetch();

    const borrarElemento = async () => {
        console.log('borrar elemento');
        await dataApi(`usuario/eliminar/${id}`, 'DELETE');
        refrescarCambios();
    }

    return (
        <button
          type="button"
          className="counter"
          onClick={borrarElemento}
        >
          Borrar
        </button>
    )
}