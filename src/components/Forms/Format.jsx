import React from "react";
import Fader from "../Fader/Fader";

const Format = ({ dataErrors, isSubmit, handleSubmit, handleInputChange }) => {
  return (
    <>
      <div className="container" style={{ backgroundColor: "white" }}>
        {Object.keys(dataErrors).length === 0 && isSubmit ? (
          <Fader></Fader>
        ) : null}

        <form className="row" onSubmit={handleSubmit}>
          <div className="col-md-3" style={{ backgroundColor: "white" }}>
            <input
              placeholder="Ingrese su nombre"
              className="form-control"
              type="text"
              name="nombre"
              onChange={handleInputChange}
            />
          </div>
          <p>{dataErrors.nombre}</p>
          <div className="col-md-3" style={{ backgroundColor: "white" }}>
            <input
              placeholder="Ingrese su email"
              className="form-control"
              type="text"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <p>{dataErrors.email}</p>
          <div className="col-md-3" style={{ backgroundColor: "white" }}>
            <input
              placeholder="Ingrese su celular"
              className="form-control"
              type="text"
              name="celular"
              onChange={handleInputChange}
            />
          </div>
          <p>{dataErrors.celular}</p>
          <div className="col-md-3" style={{ backgroundColor: "white" }}>
            <input
              placeholder="Ingrese su edad"
              className="form-control"
              type="text"
              name="edad"
              onChange={handleInputChange}
            />
          </div>
          <p>{dataErrors.edad}</p>
          <div className="col-md-3" style={{ backgroundColor: "white" }}>
            <button className="form-control" type="submit" style={{backgroundColor: "pink"}}>
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Format;
