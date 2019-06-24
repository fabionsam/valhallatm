import React from 'react';
import Routes from './routes.js';
import "./assets/css/main.css";
import "./assets/css/theme.css";
import "./assets/css/lightbox/lightbox.css";

class App extends React.Component {
  componentDidMount(){
    const script = document.createElement("script");

    script.innerText = "$('#fsslider').fsBanner({'showName':true, 'toUpdate':{}, 'whenEmpty':{}, 'trigger':'click', 'hideParent':null, 'onChanged':null });";
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
