/* eslint-disable import/no-anonymous-default-export */
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        //retorna una copia del state
        ...state,

        //y solo cambia esto
        formulario: true,
      };
    case OBTENER_PROYECTOS:
      return {
        //retorna una copia del state
        ...state,

        //y solo cambia esto
        proyectos: action.payload,
      };

    case AGREGAR_PROYECTO:
      return {
        //retorna una copia del state
        ...state,

        //y solo cambia esto
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
        errorformulario: false,
      };

    case VALIDAR_FORMULARIO:
      return {
        //retorna una copia del state
        ...state,

        //y solo cambia esto
        errorformulario: true,
      };

    case PROYECTO_ACTUAL:
      return {
        //retorna una copia del state
        ...state,

        //y solo cambia esto
        proyecto: state.proyectos.filter(
          (proyecto) => proyecto._id === action.payload
        ),
      };

    case ELIMINAR_PROYECTO:
      return {
        //retorna una copia del state
        ...state,

        //y solo cambia esto
        proyectos: state.proyectos.filter(
          (proyecto) => proyecto._id !== action.payload
        ),
        proyecto: null,
      };
    case PROYECTO_ERROR:
      return {
        //retorna una copia del state
        ...state,

        //y solo cambia esto
        mensaje: action.payload,
      };
    default:
      return state;
  }
};
