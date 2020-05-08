import React from 'react';
import './App.css';
import ImagesList from './Components/imagesList/imagesList'
 
class App extends React.Component {
  constructor(){
    super();
    this.state= {
      imagesData: []
    }
  }

  
  componentDidMount (){
    fetch('http://192.168.99.100:3001/allimages')
    .then(response => response.json())
    .then(data => this.setState({
      imagesData:data
    }))
    // console.log(this.state.imagesData[0]);  
  }
  
  render() {
    
    return (
      <div className="tc">
        <h1>Picture Viewer</h1>
       <ImagesList imagesData={this.state.imagesData}/>
      </div>
    );
  }
}
 
export default App;