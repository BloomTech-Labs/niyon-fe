import { useState } from "react";

const useCustomForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    //callback();
    console.log(inputs);
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useCustomForm;
