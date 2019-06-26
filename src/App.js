import React from 'react';
import Routes from './routes.js';
import "./assets/css/index.css";
import "./assets/css/lightbox/lightbox.css";

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
