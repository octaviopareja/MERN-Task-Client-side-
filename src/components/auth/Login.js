import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //State para iniciar sesion
  const [usuario, guardarUsuario] = useState({ email: "", password: "" });

  //extraer del state usuario
  const { email, password } = usuario;

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

    //pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={onSubmit}>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        <Link
          to="/nueva-cuenta"
          className="enlace-cuenta"
          style={{ textAlign: "center" }}
        >
          Quiero Registrarme
        </Link>
      </div>
    </div>
  );
};

export default Login;
