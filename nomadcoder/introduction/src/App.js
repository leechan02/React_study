import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("search for", keyword);
  }, [keyword]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type='text' placeholder='la' />
      <h1>{counter}</h1>
      <button onClick={onClick}>Add 1</button>
    </div>
  );
}

export default App;
