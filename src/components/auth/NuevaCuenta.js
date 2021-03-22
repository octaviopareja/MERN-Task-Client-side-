import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  //State para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  //extraer del state usuario
  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario pone submit
  const onSubmit = (e) => {
    e.preventDefault();

    //validar que no queden campos vacios

    //validar que el password sea como minimo de 6 char

    //validar que ambos password sean iguales

    //fianlmente pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Registrarme</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlfor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              placeholder="Tu Nombre"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlfor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Tu Email"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlfor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Tu Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlfor="confirmar">Repetir Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              value={confirmar}
              placeholder="Repite tu Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrate"
            />
          </div>
        </form>

        <Link to="/" className="enlace-cuenta" style={{ textAlign: "center" }}>
          Ya tengo una cuenta
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
