import React from 'react';
import Routes from './routes.js';
import "./assets/css/index.css";
import "./assets/css/lightbox/lightbox.css";
import "./assets/css/slick/slick.css"
import "./assets/css/slick/slick-theme.css"

class App extends React.Component {
  render(){ 
    return(
      <div className="App">    
        < Routes/>    
      </div>
    );
  }
}

export default App;
