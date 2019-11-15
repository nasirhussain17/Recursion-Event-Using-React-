import React, { Component } from "react";
import Example from "./carousel.js";
import ModalExample from "./Image.js";

class Gallery extends Component {
  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className="col-sm-12 col-md-10  mt-2 ml-auto">
            <Example />
          </div>
        </div>
        <div className="row align-self-center">
          <div className="col ml-auto mt-2">
            <ModalExample />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
