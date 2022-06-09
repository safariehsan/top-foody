import Pages from "./pages/Pages";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Cuisine from "./pages/Cuisine";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";
import Calories from "./components/Calories";

function App() {
  return (
    <Router>
      <Nav>
        <GiKnifeFork />
        <Logo to="/">TopFoody</Logo>
      </Nav>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:term" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

const Nav = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two" cursive;
`;

export default App;
