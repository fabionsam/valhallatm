import React from 'react';
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';

const Home = () => (
    <div id="Home">
        < Header/>
        <div class="intro">
            <div class="intro-body">
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                    <h1 class="brand-heading">VALHALLA_TM</h1>
                    <p class="intro-text">
                        Guilda BlackDesert
                    </p>
                    <a href="#pageid" class="btn btn-circle page-scroll">
                    <i class="fa fa-angle-double-down animated"></i>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
                    
        <section id="pageid">
            <div class="container content-section text-center">
                <h2 class="d-block">Apresentação</h2>
                <div class="row justify-content-left">		
                    <div class="col-md-8" style={{textAlign: "left"}}>
                        <p/>
                        <br/>
                        O principal intuito é jogar com amigos e se divertir.
                        <br/>
                        O principal requisito é ser ATIVO no GAME, GUILD e DISCORD.
                        <p/>
                        -- Comportamento:<br/>
                        Foco PVP sem exagero na toxicidade.
                        <p/>
                        <p/>
                        -- Atividades da guild:<br/>
                        GvG's<br/>
                        Node war <br/>
                        Siege.<br/>
                        Boss de guilda, VELL e Seahunt.<br/>
                        Salários até 5kk e payout referente.
                        {/* <p>
                        <a href="#" class="btnghost"><i class="fa fa-download"></i> Curriculum Vitae</a>
                        </p> */}
                    </div>
                    <div class="row justify-content-right">	
                        <li style={{"position": "relative", "top": "50%" }} class="d-inline">
                            <a href={process.env.PUBLIC_URL + "/img/HABILIDADESCOMPLETAS.jpg"} data-lightbox="image-1" class="btn btnghost btn-lg"><img src={process.env.PUBLIC_URL + "/img/btn_habilidade.png"}></img> <span class="network-name">Habilidades da Guilda</span></a>
                        </li>
                    </div>
                </div>
            </div>
        </section>
                
        <section id="portfolio">
            <div class="gallery">
                <ul class="row">
                <li class="col-md-3">
                <img src={process.env.PUBLIC_URL + "/img/2019-03-04_94168545.jfif"} alt=""></img>
                </li>
                
                <li class="col-md-3">
                <img src={process.env.PUBLIC_URL + "/img/2019-05-27_80160710.jfif"} alt=""></img>
                </li>
                
                <li class="col-md-3">
                <img src={process.env.PUBLIC_URL + "/img/2019-03-14_171860693.jfif"} alt=""></img>
                </li>
                
                
                <li class="col-md-3">
                <img src={process.env.PUBLIC_URL + "/img/2019-03-17_152500736.jfif"} alt=""></img>
                </li>
                
                <li class="col-md-3">
                <img src={process.env.PUBLIC_URL + "/img/2019-03-17_193621224.jfif"} alt=""></img>
                </li>
                
                <li class="col-md-3">
                <img src={process.env.PUBLIC_URL + "/img/2019-02-10_601310550.jfif"} alt=""></img>
                </li>
                
                
                <li class="col-md-3">
                <img src={process.env.PUBLIC_URL + "/img/2019-06-17_379448772.png"} alt=""></img>
                </li>
                
                <li class="col-md-3">
                <img src={process.env.PUBLIC_URL + "/img/2019-01-31_46070131.jfif"} alt=""></img>
                </li>		

                </ul>
            </div>
        </section>
                

        <section id="contact">
            <div class="container content-section text-center">
                <div class="row justify-content-center">
                <div class="col-md-8">
                    {/* <h2>Apresentação</h2>
                    <p>
                        O principal intuito é jogar com amigos e se divertir.

                        O principal requisito é ser ATIVO no GAME, GUILD e DISCORD.

                        -- Comportamento:
                        Foco PVP sem exagero na toxidade.


                        -- Atividades da guild:
                        GvG's
                        Node war 
                        Siege.
                        Guild boss, VELL e Seahunt.
                        Salários até 5kk e payout referente.
                    </p> */}
                    {/* <p>
                    <i><a href="mailto:wowthemesnet@gmail.com" class="highlightlink">wowthemesnet@gmail.com</a></i>
                    </p> */}
                    <ul class="list-inline banner-social-buttons">
                            
                    {/* <li class="d-inline">
                    <a href="https://twitter.com/wowthemesnet" class="btn btnghost btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                    </li> */}
                            
                    <li class="d-inline">
                    <a href="https://www.facebook.com/ValhallaTM/" target="_blank" class="btn btnghost btn-lg"><i class="fa fa-facebook fa-fw"></i> <span class="network-name">Facebook</span></a>
                    </li>

                    <li class="d-inline">
                    <a href="https://discord.gg/YYfzRtG" target="_blank" class="btn btnghost btn-lg"><i class="fab fa-discord"></i> <span class="network-name">Discord</span></a>
                    </li>

                    {/* <li class="d-inline">
                    <a href="https://github.com/wowthemesnet/template-aries-bootstrap-html" class="btn btnghost btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                    </li> */}
                            
                    </ul>
                </div>
                </div>
            </div>
        </section>

        < Footer/>
    </div>
);


export default Home;