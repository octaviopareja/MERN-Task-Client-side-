import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const Proyecto = ({ proyecto }) => {
  //obtenemos el state del formulario desde el context
  const proyectosContext = useContext(ProyectoContext);
  const { proyectoActual } = proyectosContext;

  //obtener la funcion del context de tarea
  const tareasContext = useContext(TareaContext);
  const { obtenerTareas } = tareasContext;

  //funcion para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    //hasta aca tengo el id, todo bien

    //>>>>>>>>>>>>>>>>>>>>>>>

    proyectoActual(id); //fijar proyecto actual
    obtenerTareas(id); // filtrar la tareas cuando se de click
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto._id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
