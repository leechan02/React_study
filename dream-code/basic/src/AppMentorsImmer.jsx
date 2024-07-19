import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function AppMentors() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`who's mentor do you want to change?`);
    const current = prompt(`what is the new mentor's name?`);

    updatePerson((person) => {
      const mentor = person.mentors.find((mentor) => mentor.name === prev);
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt(`what's your mentor's name?`);
    const title = prompt(`what's your mentor's title?`);

    updatePerson((person) => person.mentors.push({ name, title }));
  };

  const handleDelete = () => {
    const name = prompt(`what's your mentor's name?`);

    updatePerson(
      (person) =>
        (person.mentors = person.mentors.filter(
          (mentor) => mentor.name !== name
        ))
    );
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
