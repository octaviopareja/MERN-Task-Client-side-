import React, { useContext, useState } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const NuevoProyecto = () => {
  //obtenemos el state del formulario desde el context
  const proyectosContext = useContext(ProyectoContext);
  const { formulario, mostrarFormulario } = proyectosContext;

  //state para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  //extraer nombre de proyecto con distructuring
  const { nombre } = proyecto;

  //leer los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario envia el form
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //validar el proyecto

    //agregar al state

    //reiniciar el form
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            Value="Agregar Proyecto"
          />
        </form>
      ) : null}
    </>
  );
};

export default NuevoProyecto;
