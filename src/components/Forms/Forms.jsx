import React, { useState } from "react";

const Forms = () => {
  const [data, setData] = useState({
    nombre: "",
    email: "",
    celular: "",
    edad: "",
  });

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.nombre + ' ' + data.email + ' ' + data.celular + ' ' + data.edad)
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-md-3">
          <input
            placeholder="Ingrese su nombre"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            placeholder="Ingrese su email"
            className="form-control"
            type="text"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            placeholder="Ingrese su celular"
            className="form-control"
            type="text"
            name="celular"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            placeholder="Ingrese su edad"
            className="form-control"
            type="text"
            name="edad"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default Forms;
