import "./App.css";
import SearchBox from "./components/searchBox";
import CloseMenu from "./components/button/closeButtons";
import MenuBar from "./components/menu/menuBar";
import List from "./components/list/list";
import { useEffect, useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];

export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <DarkModeProvider>
      <div className="App">
        <div className="container">
          <CloseMenu />
          <MenuBar
            filters={filters}
            filter={filter}
            onFilterChange={setFilter}
          />
          <List
            filter={filter}
            todos={todos}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </div>
        <SearchBox onAdd={handleAdd} />
      </div>
    </DarkModeProvider>
  );
}

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
