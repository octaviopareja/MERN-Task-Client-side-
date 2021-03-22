import React from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: true },
    { nombre: "Elegir Plataformas de pago", estado: true },
    { nombre: "Elegir Hosting", estado: true },
  ];

  return (
    <>
      <h2>Proyecto: Tienda Virtual</h2>

      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}

        <button type="button" className="btn btn-eliminar">
          Eliminar proyecto &times;
        </button>
      </ul>
    </>
  );
};

export default ListadoTareas;
