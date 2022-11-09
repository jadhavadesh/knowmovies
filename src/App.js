import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './component/Home';
import MovieDetails from './component/movies/MovieDetails';
import Error from './component/Error';
import "./App.css"



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='movie/:id' element={<MovieDetails />} />
      <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
