import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AlertaContext from "../../context/alertas/AlertaContext";

const ListadoProyectos = () => {
  //extraer proyectos del state inicial
  const proyectosContext = useContext(ProyectoContext);
  const { proyectos, obtenerProyectos, mensaje } = proyectosContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  //obtener proyectos cuando carga el componente
  useEffect(() => {
    if (!mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerProyectos();
    //eslint-disable-next-line
  }, [mensaje]);

  //revisamos si "proyectos" tiene contenido
  if (proyectos.length === 0)
    return (
      <p style={{ textAlign: "center", color: "#666" }}>
        No hay proyectos, comienza creando uno.
      </p>
    );

  return (
    <ul className="listado-proyectos">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.mmsg}</div>
      ) : null}
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
