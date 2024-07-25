import React, { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`who's mentor do you want to change?`);
    const current = prompt(`what is the new mentor's name?`);

    dispatch({ type: "updated", prev, current });
  };

  const handleAdd = () => {
    const name = prompt(`what's your mentor's name?`);
    const title = prompt(`what's your mentor's title?`);

    dispatch({ type: "added", name, title });
  };

  const handleDelete = () => {
    const name = prompt(`what's your mentor's name?`);

    dispatch({ type: "deleted", name });
  };

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>{person.name} mentor is:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>Change mentor name</button>
      <button onClick={handleAdd}>Add mentor</button>
      <button onClick={handleDelete}>Remove mentor</button>
    </div>
  );
}

const initialPerson = {
  name: "euiclee",
  title: "developer",
  mentors: [
    {
      name: "taeypark",
      title: "developer",
    },
    {
      name: "hyeoan",
      title: "developer",
    },
  ],
};
