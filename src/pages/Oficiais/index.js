import React from 'react';
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';
import '../../assets/css/fsbanner.css';

class Oficiais extends React.Component {
    componentDidMount(){
        const script = document.createElement("script");
    
        script.innerText = "$('#fsslider').fsBanner({'showName':true, 'toUpdate':{}, 'whenEmpty':{}, 'trigger':'click', 'hideParent':null, 'onChanged':null });";
        script.async = true;
    
        document.body.appendChild(script);
      }

    render(){
        return(
            <div id="Oficiais">
                < Header/>
                <div class="intro">
                    <div class="intro-body">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-8">
                                    <h1 class="brand-heading">OFICIAIS</h1>
                                    <p class="intro-text">
                                        Conheça nossos oficiais
                                    </p>
                                    <a href="#pageid" class="btn btn-circle page-scroll">
                                    <i class="fa fa-angle-double-down animated"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="pageid" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/marmorebranco.jpg)"}}>
                    <div class="container content-section text-center">
                        <div class="fsbanner" id="fsslider">
                            <div style={{"background-image":"url(" + process.env.PUBLIC_URL + "/img/oficiais/meridah.jfif)"}}>
                                <span class="name">MeridaH</span>
                            </div>
                            <div style={{"background-image":"url(" + process.env.PUBLIC_URL + "/img/oficiais/sevilha.jfif)"}}>
                                <span class="name">Sevilha</span>
                            </div>
                            <div style={{"background-image":"url(" + process.env.PUBLIC_URL + "/img/oficiais/fabionsam.jfif)"}}>
                                <span class="name">Delphi</span>
                            </div>
                        </div>
                    </div>
                </section>
                <script>
                    
                </script>
                < Footer/>
            </div>
        );
    }
}

export default Oficiais;