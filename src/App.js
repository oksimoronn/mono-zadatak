import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import EditVehicle from "./Components/EditVehicle";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/edit/:id/:name/:abr" element={<EditVehicle />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
