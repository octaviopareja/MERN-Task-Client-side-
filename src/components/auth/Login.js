import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/AlertaContext";
import AuthContext from "../../context/autenticacion/AuthContext";

const Login = (props) => {
  //extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  //en caso de que el passwordo usuario no exista
  useEffect(() => {
    console.log("soy el useffect");
    //evaluar si el usuario esta autenticado
    if (autenticado) {
      console.log("y estoy autenticado");
      props.history.push("/proyectos");
    }

    //evaluar si hay un menasje para mostrar
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

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
    if (email.trim() === "" || password.trim === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
    }

    //pasarlo al action
    iniciarSesion({ email, password });
  };

  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
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
