/* eslint-disable import/no-anonymous-default-export */
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
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
          (proyecto) => proyecto.id === action.payload.id
        ),
      };

    case ELIMINAR_PROYECTO:
      return {
        //retorna una copia del state
        ...state,

        //y solo cambia esto
        proyectos: state.proyectos.filter(
          (proyecto) => proyecto.id !== action.payload
        ),
        proyecto: null,
      };

    default:
      return state;
  }
};
