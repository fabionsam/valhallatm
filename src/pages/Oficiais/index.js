import React from 'react';
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';
import '../../assets/css/fsbanner.css';
import * as $ from 'jquery';

class Oficiais extends React.Component {
    componentDidMount(){
        var script = document.createElement("script");
        script.innerText = "$('#fsslider').fsBanner({'showName':true, 'toUpdate':{}, 'whenEmpty':{}, 'trigger':'click', 'hideParent':null, 'onChanged':null });";
        script.async = true;
        document.body.appendChild(script);

        script = document.createElement("script");
        script.src = process.env.PUBLIC_URL + "/js/theme.js"; 
        script.async = true;
        document.body.appendChild(script);

        $('html,body').scrollTop(0);
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
                            <div style={{"background-image":"url(" + process.env.PUBLIC_URL + "/img/oficiais/dedo.jpg)"}}>
                                <span class="name">BichoGrilo</span>
                            </div>
                            <div style={{"background-image":"url(" + process.env.PUBLIC_URL + "/img/oficiais/sevilha.jfif)"}}>
                                <span class="name">Sevilhx</span>
                            </div>
                            <div style={{"background-image":"url(" + process.env.PUBLIC_URL + "/img/oficiais/fabionsam.jfif)"}}>
                                <span class="name">Delphi</span>
                            </div>
                            <div style={{"background-image":"url(" + process.env.PUBLIC_URL + "/img/oficiais/djali.jfif)"}}>
                                <span class="name">Djali</span>
                            </div>
                            <div style={{"background-image":"url(" + process.env.PUBLIC_URL + "/img/oficiais/gillroy.png)"}}>
                                <span class="name">Gillroy</span>
                            </div>
                            <div style={{"background-image":"url(" + process.env.PUBLIC_URL + "/img/oficiais/metal.png)"}}>
                                <span class="name">IMetal</span>
                            </div>
                            <div style={{"background-image":"url(" + process.env.PUBLIC_URL + "/img/oficiais/syruni.png)"}}>
                                <span class="name">YojimboHyun</span>
                            </div>
                            <div style={{"background-image":"url(" + process.env.PUBLIC_URL + "/img/oficiais/ajax.jpg)"}}>
                                <span class="name">Frenetic</span>
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