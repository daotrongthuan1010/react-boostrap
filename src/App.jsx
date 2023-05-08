import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Trang chủ react!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>Giới thiệu về react</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Liên hệ với chúng tôi.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
