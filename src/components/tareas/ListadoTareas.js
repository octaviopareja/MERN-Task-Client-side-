import React, { useContext } from "react";
import Tarea from "./Tarea";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  //extraer proyectos del state inicial
  const proyectosContext = useContext(ProyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //extraer tareas del state inicial
  const tareasContext = useContext(TareaContext);
  const { tareasproyecto } = tareasContext;

  //si proyecto seleccionado es null
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  //array distructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //const tareasProyecto = [];

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}

        <button
          type="button"
          className="btn btn-eliminar"
          onClick={() => eliminarProyecto(proyectoActual._id)}
        >
          Eliminar proyecto &times;
        </button>
      </ul>
    </>
  );
};

export default ListadoTareas;
