import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import List from './components/list/List'
import { useFetch } from './hook/useFetch'
import { useEffect } from 'react'

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const [ dataApi ] = useFetch();

  const obtenerUsuarios = useCallback(async () => {
      const response = await dataApi('usuario/obtener');
      setUsuarios(response.usuarios);
  }, [dataApi]);


  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- false positive: setUsuarios ocurre tras un await real
    obtenerUsuarios();
  }, []);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Lista de usuarios</h1>
          <List usuarios={usuarios} refrescarCambios={obtenerUsuarios}/>
        </div>
      </section>

      <div className="ticks"></div>
    </>
  )
}

export default App
