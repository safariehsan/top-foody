import Pages from "./pages/Pages";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Cuisine from "./pages/Cuisine";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
    </Router>
  );
}

export default App;
