import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "euiclee";
  const list = ["apple", "banana", "orange"];

  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
