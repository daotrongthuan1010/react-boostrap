import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import exampleImg from '../img/abc.jpg';
import thaiLan from '../img/thailan.jpg';
import vietnam from '../img/vietnam.jpg';
import { Carousel } from "react-bootstrap";

function Content(props) {
  const check = props.free;
  if(check===true){
  return (
    <div className="container">
      <h2>{props.name}</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={exampleImg}
            alt="Los Angeles"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thaiLan}
            alt="Thailand"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={vietnam}
            alt="VietNam"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
}
export default Content;