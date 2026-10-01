import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Todo from "./pages/Todo";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <nav>
        <h2>Week 2 React</h2>

        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/product">Product</NavLink>{" "}
        <NavLink to="/todo">To-Do</NavLink>{" "}
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}