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
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};

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
    } else if (values.edad < 18) {
      errors.edad = "You must be over 18 years old";
    } else if (values.edad > 100) {
      errors.edad = "You must be under 100 years old";
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
