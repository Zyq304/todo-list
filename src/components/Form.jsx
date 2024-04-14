import { useState, useEffect } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [addition, setAddition] = useState(false);

  useEffect(() => {
    if (addition) {
      console.log("useEffect detected addition");
      props.geoFindMe();
      setAddition(false);
    }
  });

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setAddition(true);
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      <div class="coolinput">
        <label for="input" class="text">
          Task Title:
        </label>
        <input
          type="text"
          placeholder="Write here..."
          name="input"
          class="input"
          value={name}
          onChange={handleChange}
        />
      </div>

      <button type="submit" class="btn-ani">
        <i class="animation"></i>Add<i class="animation"></i>
      </button>
    </form>
  );
}

export default Form;
