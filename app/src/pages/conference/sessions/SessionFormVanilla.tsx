import * as React from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { CREATE_SESSION } from "./CREATE_SESSION";

interface State {
  title: string;
  description: string;
  format: string;
  level: string;
}

type StateKeys = keyof State;

type Action =
  | {
      type: "onChange";
      payload: { name: StateKeys; value: string };
    }
  | { type: "onBlur" };

export function SessionForm() {
  const history = useHistory();
  const [create] = useMutation(CREATE_SESSION);

  const initialState: State = {
    title: "",
    description: "",
    format: "",
    level: "",
  };

  function formReducer(state: State, action: Action) {
    switch (action.type) {
      case "onChange":
        return { ...state, [action.payload.name]: action.payload.value };
      case "onBlur":
        return state; // more logic here
      default:
        return state;
    }
  }

  const [formValues, dispatch] = React.useReducer(formReducer, initialState);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.currentTarget;

    dispatch({
      type: "onChange",
      payload: {
        name: target.name as StateKeys,
        value: target.value,
      },
    });
  }

  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function submitForm(e: React.SyntheticEvent) {
    e.preventDefault();
    await create({ variables: { session: formValues } });
    setTimeout(() => {
      history.push("/conference/sessions");
    }, 2000);
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <form style={{ width: "100%", maxWidth: 500 }} onSubmit={submitForm}>
        <h3 className="h3 mb-3 font-weight-normal">Submit a Session!</h3>
        <div className="mb-3" style={{ paddingBottom: 5 }}>
          <label htmlFor="inputTitle">Title</label>
          <input
            ref={inputRef}
            type="text"
            id="inputTitle"
            className="form-control"
            required
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3" style={{ paddingBottom: 5 }}>
          <label htmlFor="inputDescription">Description</label>
          <input
            type="textarea"
            id="inputDescription"
            className="form-control"
            required
            name="description"
            value={formValues.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3" style={{ paddingBottom: 5 }}>
          <label htmlFor="inputFormat">Format</label>
          <input
            type="text"
            name="format"
            id="inputFormat"
            className="form-control"
            required
            value={formValues.format}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3" style={{ paddingBottom: 5 }}>
          <label htmlFor="inputLevel">Level</label>
          <input
            type="text"
            name="level"
            id="inputLevel"
            className="form-control"
            required
            value={formValues.level}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
