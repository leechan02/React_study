import React, { useState } from "react";
import "./AppXY.css";

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

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`who's mentor do you want to change?`);
    const current = prompt(`what is the new mentor's name?`);

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        } else {
          return mentor;
        }
      }),
    }));
  };

  const handleAdd = () => {
    const name = prompt(`what's your mentor's name?`);
    const title = prompt(`what's your mentor's title?`);

    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };

  const handleDelete = () => {
    const name = prompt(`what's your mentor's name?`);

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
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
