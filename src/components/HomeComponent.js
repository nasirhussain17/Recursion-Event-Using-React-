import React from "react";
import "./style.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div classname="col-4">
          <p align="center">
            We present you,the biggest educational fest in
            Pondicherry.Recursion,with its inception in the year 2010,is one of
            the biggest fest of Pondicherry university Department of Computer
            Science spread across a span of three days,the fest provides young
            minds a chance to participate and explore much more in the domain of
            Computer science.Be it an exposure to the ECSTATIC world of computer
            science and coding,a chance to discuss recent phenomena of the
            subject at a global atmosphere,participating and showcasing talent
            in a cultural extravagenza or showing their competetive spirit
            through academia and culturals .<br /> Recursion contains it
            all.With immense and growing national participation , recursion aims
            at being one of the premier fests of the country and an unforgetable
            voyage for all.
            <br />
            <span className="align-self-center">
              <b>Team Recursion </b>
            </span>
          </p>
        </div>
      </div>

      <div className="row justify-content-cente mb-50">
        <div className=" card col-sm-6 offset-2">
          <h3 className="card-header bg-primary bg-dark text-white">
            Facts At a Glance
          </h3>
          <div className="card-body">
            <dl className="row">
              <dt className="col-6">Event Date</dt>
              <dd className="col-6">3 Feb. 2020</dd>
              <dt className="col-6">Organizer</dt>
              <dd className="col-6">Computer science Dept,pondicherry Univ</dd>
              <dt className="col-6">No.of events</dt>
              <dd class="col-6">9</dd>
              <dt className="col-6">Members in each team</dt>
              <dd className="col-6">5</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
