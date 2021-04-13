import React from "react";

function Form({ text, handleChange, handleSubmit }) {
  const change = (value) => {
    handleChange(value);
  };

  const submit=(e)=>{
    e.preventDefault();
    handleSubmit();
  }

  return (
    <div>
      <form
        onSubmit={(e) => submit(e)}
      >
        <input
          value={text}
          name="text"
          onChange={(e) => change(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
