import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const FormTarea = () => {
  //extraer proyectos del state inicial
  const proyectosContext = useContext(ProyectoContext);
  const { proyecto } = proyectosContext;

  //si proyecto seleccionado es null
  if (!proyecto) return null;

  //array distructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre tarea..."
            name="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
