import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from './routers/Movies';
import Movie from './routers/Movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
