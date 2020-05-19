import React from "react";
import "./App.css";
import ImagesList from "./Components/imagesList/imagesList";
import Navigation from "./Components/navigation/Navigation";
import Welcome from "./Components/welcome/Welcome";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imagesData: [],
      isUserSignin: false,
      userEmail: "",
    };
  }

  componentDidMount() {
    fetch("http://172.17.0.1:3001/Allimages")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          imagesData: data,
        })
      );
  }
  userCredentials = (email, signin) => {
    this.setState({ userEmail: email, isUserSignin: signin });
  };
  render() {
    return (
      <div className="tc">
        <Navigation
          email={this.state.userEmail}
          isSignin={this.state.isUserSignin}
        />
        <Route path="/welcome">
          <Welcome user={this.userCredentials} />
        </Route>
        <Route exact path="/home">
          <ImagesList imagesData={this.state.imagesData} />
        </Route>
      </div>
    );
  }
}

export default App;
