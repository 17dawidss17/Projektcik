import React from "react";
import axios from "axios";
import { setUser } from "../../hook/auth";
import { NavigateBefore } from "@material-ui/icons";

const ErrorMessage = ({ text }) => {
  return (
    <div className="error flex item-center justify center pa4 bg-washed-red black">
      <svg className="box" viewBox="0 0 32 32">
        <title>Błąd</title>
      </svg>
      <span className="title">{text}</span>
    </div>
  );
};
const validate = (form) => {
  if (!form.email) {
    return "Podaj e-mail";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
    return "Zły e-mail";
  }
  if (!form.password) {
    return "Hasło jest wymagane";
  }

  return null;
};

export default () => {
  const [error, setError] = React.useState(null);
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validate(form);
    if (errorMsg) {
      setError(errorMsg);
      console.log("blad");
      return;
    }
    try {
      const { data } = await axios.post(
        "https://localhost:3000/successLogin",
        form
      );
      setUser(data);
      setError(null);
      NavigateBefore("/Home");
    } catch {
      setError("Błąd logowania");
    }
  };
  return (
    <main className="pa4 black-80">
      {error && <ErrorMessage text={error} />}
      <form className="measure" onSubmit={handleSubmit}>
        <fieldset id="signup" className="ba b--transparent ph0 mh0 mb0">
          <legend className="f4 fw6 ph0 mh0"> Formularz rejestracji</legend>
          <div className="form">
            <label className="db fw6 lh-copy f6" for="email">
              Email
            </label>
            <input
              className="pa2 input-reset ba bg-transparent w-100"
              type="email"
              name="email"
              onChange={updateField}
            />
          </div>

          <div className="form">
            <label className="db fw6 lh-copy f6" for="password">
              Hasło
            </label>
            <input
              className="pa2 input-reset ba bg-transparent w-100"
              type="password"
              name="password"
              onChange={updateField}
            />
          </div>
          <div className="form">
            <input
              className="b w-100 tc ph3 pv3 input-reset"
              type="submit"
              value="załóż konto"
            />
          </div>
        </fieldset>
      </form>
    </main>
  );
};
