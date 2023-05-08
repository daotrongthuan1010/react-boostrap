import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Trang chủ</h2>
    <p>Welcome to my website!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>Learn more about me.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Get in touch with me.</p>
  </div>
);

const App = () => (
  <Router>
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

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

ReactDOM.render(<Test />, document.getElementById('root'));