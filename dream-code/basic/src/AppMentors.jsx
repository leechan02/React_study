import React, { useState } from "react";
import "./AppXY.css";

export default function AppMentors() {
  const [person, setPerson] = useState({
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
  });

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
      <button
        onClick={() => {
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
        }}
      >
        Change mentor name
      </button>
    </div>
  );
}
