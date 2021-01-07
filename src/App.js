import React, {Component} from 'react';
import "styles.css"
import "tailwindcss/dist/base.css"
import Home from "pages/Home"
import AboutUs from "pages/About";
import OurTeam from "pages/OurTeam"
import ContactUs from "pages/Contact";
import SignUp from "pages/SignUp"
import{ BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component{
  render() {
    return (
        <Router>
          <div className = "App">
             <div className = "container">
              <Route exact path = "/" render = {props => (
                <React.Fragment>
                  <Home />
                </React.Fragment>
              )} />
              <Route path = "/about" render = {props => (
                <React.Fragment>
                  <AboutUs />
                </React.Fragment>
              )} />
              <Route path = "/our-team" render = {props => (
                <React.Fragment>
                  <OurTeam />
                </React.Fragment>
              )} />
              <Route path = "/contact" render = {props => (
                <React.Fragment>
                  <ContactUs />
                </React.Fragment>
              )} />
              <Route path = "/sign-up" render = {props => (
                <React.Fragment>
                  <SignUp />
                </React.Fragment>
              )} />
            </div>
          </div>
        </Router>
    )
  }
}

export default App;
