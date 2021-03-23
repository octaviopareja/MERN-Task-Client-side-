import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ProyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";
import {
  AGREGAR_PROYECTO,
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Desarrollo Web" },
    { id: 4, nombre: "MERN" },
  ];

  const initialState = {
    //para nuevo proyecto
    formulario: false,
    //para listado de proyectos
    proyectos: [],
    //state para manejar errores
    errorformulario: false,
    //proyecto selecionado
    proyecto: null,
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  //serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  //agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuid();

    //insertar proyecto en el state con dispatch
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  //validar el formulario por error
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  //Selecciona el proyecto que el usuario dio click
  const proyectoActual = (proyecto) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyecto,
    });
  };

  //eliminar proyecto
  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <ProyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
