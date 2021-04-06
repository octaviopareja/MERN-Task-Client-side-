import React, { useContext, useState, useEffect } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const FormTarea = () => {
  //extraer proyectos del state inicial
  const proyectosContext = useContext(ProyectoContext);
  const { proyecto } = proyectosContext;

  //extraer tareas del state inicial
  const tareasContext = useContext(TareaContext);
  const {
    errortarea,
    tareaseleccionada,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea,
  } = tareasContext;

  //Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({ nombre: "" });
    }
  }, [tareaseleccionada]);

  //state del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  //extraer el nombre del proyecto
  const { nombre } = tarea;

  //si proyecto seleccionado es null
  if (!proyecto) return null;

  //array distructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    //revisar si es edicion o si es nueva tarea
    if (tareaseleccionada === null) {
      //tarea nueva
      //agregar la tarea al state de tareas
      tarea.proyecto = proyectoActual._id;
      agregarTarea(tarea);
    } else {
      //es una tarea existente
      actualizarTarea(tarea);
      limpiarTarea();
    }

    //obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual._id);

    //reinciar el form
    guardarTarea({ nombre: "" });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre tarea..."
            name="nombre"
            onChange={handleChange}
            value={nombre}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>

      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
