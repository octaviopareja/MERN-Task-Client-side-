import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const Proyecto = ({ proyecto }) => {
  //obtenemos el state del formulario desde el context
  const proyectosContext = useContext(ProyectoContext);
  const { proyectoActual } = proyectosContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => proyectoActual(proyecto)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
