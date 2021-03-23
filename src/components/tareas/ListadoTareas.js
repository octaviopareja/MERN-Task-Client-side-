import React, { useContext } from "react";
import Tarea from "./Tarea";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const ListadoTareas = () => {
  //extraer proyectos del state inicial
  const proyectosContext = useContext(ProyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //si proyecto seleccionado es null
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  //array distructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: true },
    { nombre: "Elegir Plataformas de pago", estado: true },
    { nombre: "Elegir Hosting", estado: true },
  ];

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}

        <button
          type="button"
          className="btn btn-eliminar"
          onClick={() => eliminarProyecto(proyectoActual.id)}
        >
          Eliminar proyecto &times;
        </button>
      </ul>
    </>
  );
};

export default ListadoTareas;
