import React from "react";
import "./App.css";
import ImagesList from "./Components/imagesList/imagesList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imagesData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/allimages")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          imagesData: data,
        })
      );
  }

  render() {
    return (
      <div className="tc">
        <h1>SUNSETS</h1>
        <ImagesList imagesData={this.state.imagesData} />
      </div>
    );
  }
}

export default App;
