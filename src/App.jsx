import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

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

const Error = () => (
  <div>
    <p>Error 404 not found exception ...</p>
    <Link to="/">Back</Link>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;