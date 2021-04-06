import { useReducer } from "react";
import ProyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";
import {
  AGREGAR_PROYECTO,
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR,
} from "../../types";

import clienteAxios from "../../config/axios";

const ProyectoState = (props) => {
  const initialState = {
    //para nuevo proyecto
    formulario: false,
    //para listado de proyectos
    proyectos: [],
    //state para manejar errores
    errorformulario: false,
    //proyecto selecionado
    proyecto: null,
    //mensaje de error
    mensaje: false,
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
  const obtenerProyectos = async () => {
    try {
      const resultado = await clienteAxios.get("/api/proyectos");
      //insertar proyecto en el state con dispatch
      dispatch({
        type: OBTENER_PROYECTOS,
        payload: resultado.data.proyectos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //agregar nuevo proyecto
  const agregarProyecto = async (proyecto) => {
    try {
      const resultado = await clienteAxios.post("/api/proyectos", proyecto);
      //insertar proyecto en el state con dispatch
      dispatch({
        type: AGREGAR_PROYECTO,
        payload: resultado.data,
      });
    } catch (error) {
      const alerta = {
        mgs: "Hubo un error",
        categoria: "alerta-error",
      };
      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta,
      });
    }
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
  const eliminarProyecto = async (proyectoId) => {
    try {
      await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
      dispatch({
        type: ELIMINAR_PROYECTO,
        payload: proyectoId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        errorformulario: state.errorformulario,
        mensaje: state.mensaje,
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
