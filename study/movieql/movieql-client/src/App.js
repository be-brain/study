import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./routes/Movies";
import Movie from "./routes/Movie";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Movies />}></Route>
                <Route path="/movies/:id" element={<Movie />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
