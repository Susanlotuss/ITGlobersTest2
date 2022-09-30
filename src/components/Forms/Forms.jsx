import React, { useState, useEffect } from "react";
import Format from "./Format";

const Forms = () => {
  const initialStateValue = {
    nombre: "",
    email: "",
    celular: "",
    edad: "",
  };

  const [data, setData] = useState(initialStateValue);

  const [dataErrors, setDataErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataErrors(validate(data));
    setIsSubmit(true);

    e.target.reset();
  };

  useEffect(() => {
    if (Object.keys(dataErrors).length === 0 && isSubmit) {
      console.log(data);
    }
  }, [data, dataErrors, isSubmit]);

  const validate = (values) => {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let errors = {};

    if (!values.nombre) {
      errors.nombre = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.celular) {
      errors.celular = "cellphone is required";
    } else if (values.celular.length < 10) {
      errors.celular = "Cellphone must be 10 characters";
    } else if (values.celular.length > 10) {
      errors.celular = "Cellphone cannot exceed more than 10 characters";
    }

    if (!values.edad) {
      errors.edad = "Age is required";
    } else if (values.edad.length < 0) {
      errors.edad = "Age must be more than 0 characters";
    } else if (values.edad.length > 3) {
      errors.edad = "Age cannot exceed more than 3 characters";
    }
    return errors;
  };

  return (
    <>
        <Format
          dataErrors={dataErrors}
          isSubmit={isSubmit}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
    </>
  );
};

export default Forms;
