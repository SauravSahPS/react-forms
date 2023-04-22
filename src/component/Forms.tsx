import { FormEvent, useState } from "react";

const Forms = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { Name: "", Age: 0 };

  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // if (nameRef.current?.value != null) person.Name = nameRef.current.value;

    // if (ageRef.current?.value != null)
    //   person.Age = parseInt(ageRef.current.value);

    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          type="text"
          value={person.name}
          className="form-control"
        />{" "}
        {/*ref={nameRef}*/}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
          type="text"
          value={person.age}
          className="form-control"
        />{" "}
        {/*ref={ageRef}*/}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Forms;
