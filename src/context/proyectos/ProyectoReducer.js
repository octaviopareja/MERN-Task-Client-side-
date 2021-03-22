/* eslint-disable import/no-anonymous-default-export */
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types";

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

    default:
      return state;
  }
};
