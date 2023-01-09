import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetail from "./Components/ItemDetail";

function App() {
  return (
    <>
      <h1>hola</h1>
      <Router>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path='/itemDetail/:id' element={<ItemDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
