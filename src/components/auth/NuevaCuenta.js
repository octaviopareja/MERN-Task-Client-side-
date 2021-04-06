import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/AlertaContext";
import AuthContext from "../../context/autenticacion/AuthContext";

const NuevaCuenta = (props) => {
  console.log(props);
  //extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  //en caso de que el usuario se haya registrado, autentificado, o sea un registro duplicado
  useEffect(() => {
    //evaluar si el usuario esta autenticado
    if (autenticado) {
      props.history.push("/proyectos");
    }
    //evaluar si hay un menasje para mostrar
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

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
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    //validar que el password sea como minimo de 6 char
    if (password.length < 6) {
      mostrarAlerta(
        "El password deber ser de al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }
    //validar que ambos password sean iguales
    if (password !== confirmar) {
      mostrarAlerta("Los passwords no son iguales", "alerta-error");
      return;
    }

    //fianlmente pasarlo al action
    registrarUsuario({ nombre, email, password });
  };

  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
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
