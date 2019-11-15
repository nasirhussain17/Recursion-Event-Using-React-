import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Home from "./HomeComponent";
import Event from "./EventsComponet";
import Gallery from "./GalleryComponent";
import Contact from "./ContactusComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />

        <div>
          <Switch>
            <Route exact path="/home" component={Home} />} />
            <Route path="/events" component={Event} />} />
            <Route path="/gallery" component={Gallery} />} />
            <Route path="/contactus" component={Contact} />} />
            <Redirect to="/home" />
            <div>
              <Footer />
            </div>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
