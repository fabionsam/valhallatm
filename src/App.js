import React from 'react';
import Routes from './routes.js';
import "./assets/css/main.css";
import "./assets/css/theme.css";
import "./assets/css/lightbox/lightbox.css";

class App extends React.Component {
  componentDidMount () {
    var script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + "/js/jquery-3.4.1.min.js";
    script.async = true;
    document.body.appendChild(script);

    script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + "/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + "/js/theme.js";
    script.async = true;
    document.body.appendChild(script);

    script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + "/js/lightbox/lightbox.min.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render(){ 
    return(
      <div className="App">    
        < Routes/>    
      </div>
    );
  }
}

export default App;
