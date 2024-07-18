import React, { useState } from "react";
import "./AppXY.css";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "euiclee",
    title: "developer",
    mentor: {
      name: "taeypark",
      title: "developer",
    },
  });

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>
        {person.name} mentor is {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((person) => ({ ...person, mentor: {...person.mentor, name} }));
        }}
      >
        Change Mentor
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({ ...person, mentor: {...person.mentor, title} }));
        }}
      >
        Change Title
      </button>
    </div>
  );
}
