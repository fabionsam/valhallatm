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
                <div class="row justify-content-center">		
                <div class="col-md-8">
                    <h2 class="d-block">Apresentação</h2>
                    <p>
                        O principal intuito é jogar com amigos e se divertir.
                        <br/>
                        O principal requisito é ser ATIVO no GAME, GUILD e DISCORD.
                        <p/>
                        -- Comportamento:
                        Foco PVP sem exagero na toxidade.
                        <p/>
                        <p/>
                        -- Atividades da guild:
                        GvG's<br/>
                        Node war <br/>
                        Siege.<br/>
                        Guild boss, VELL e Seahunt.<br/>
                        Salários até 5kk e payout referente.
                    </p>
                    {/* <p>
                    <a href="#" class="btnghost"><i class="fa fa-download"></i> Curriculum Vitae</a>
                    </p> */}
                </div>
                </div>
            </div>
        </section>
                
        <section id="portfolio">
            <div class="gallery">
                <ul class="row">
                <li class="col-md-3">
                <img src="https://media.discordapp.net/attachments/540356557066469386/552287200079773698/2019-03-04_94168545.JPG" alt=""></img>
                </li>
                
                <li class="col-md-3">
                <img src="https://cdn.discordapp.com/attachments/540356557066469386/582579591441285130/2019-05-27_80160710.JPG" alt=""></img>
                </li>
                
                <li class="col-md-3">
                <img src="https://media.discordapp.net/attachments/540356557066469386/555947468857278474/2019-03-14_171860693.JPG" alt=""></img>
                </li>
                
                
                <li class="col-md-3">
                <img src="https://media.discordapp.net/attachments/540356557066469386/556727027890126848/2019-03-17_152500736.JPG" alt=""></img>
                </li>
                
                <li class="col-md-3">
                <img src="https://cdn.discordapp.com/attachments/540356557066469386/556896491642290186/2019-03-17_193621224.JPG" alt=""></img>
                </li>
                
                <li class="col-md-3">
                <img src="https://cdn.discordapp.com/attachments/540356557066469386/544274901914353669/2019-02-10_601310550.JPG" alt=""></img>
                </li>
                
                
                <li class="col-md-3">
                <img src="https://cdn.discordapp.com/attachments/584809883321368618/590348425548005376/2019-06-17_379448772.png" alt=""></img>
                </li>
                
                <li class="col-md-3">
                <img src="https://cdn.discordapp.com/attachments/540356557066469386/540358447028240398/2019-01-31_46070131.JPG" alt=""></img>
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