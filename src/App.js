import React,{ Component } from "react";

import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';
class App extends Component {
  render() {
    return(
      <div className="App">
        <Navigation />
        <Logo />
        <Rank/>
        <ImageLinkForm />
        {
          // <FaceRecognition />

        }
      </div>
    );
  }
}
export default App;
