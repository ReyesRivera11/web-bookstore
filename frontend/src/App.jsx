import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import ShowBook from "./pages/ShowBook"
import EdithBook from "./pages/EdithBook"
import DeleteBook from "./pages/DeleteBook"
import CreateBook from "./pages/CreateBook"
function App() {
    return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/showbook/:id" element={<ShowBook/>}/>
        <Route path="/edithbook/:id" element={<EdithBook/>}/>
        <Route path="/deletbook/:id" element={<DeleteBook/>}/>
        <Route path="/createbook" element={<CreateBook/>}/>
      </Routes>
    )
}

export default App
