import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const ListadoProyectos = () => {
  //extraer proyectos del state inicial
  const proyectosContext = useContext(ProyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  //obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  //revisamos si "proyectos" tiene contenido
  if (proyectos.length === 0)
    return (
      <p style={{ textAlign: "center", color: "#666" }}>
        No hay proyectos, comienza creando uno.
      </p>
    );

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} key={proyecto.id} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
