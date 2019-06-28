import React from 'react';
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';
import { Link } from 'react-router-dom';

class Regras extends React.Component{
    componentDidMount(){
        window.$('html,body').scrollTop(0);
    }

    render(){
        return(
            <div id="Regras">
                <Header/>
                    <div id="divRegras" className="container-fluid" style={{height: "900px"}}>
                        <div className="row justify-content-center" style={{height: "100%"}}>
                            <div className="col-6" style={{backgroundColor: "rgba(255, 255, 255, 0.5)", height: "100%", alignContent: "center"}}>
                                <div style={{marginTop: "9.5%", marginLeft: "7%", marginRight: "27%"}}>
                                    <span style={{fontSize:"70px", fontFamily: "cinzel", letterSpacing: "0.05em"}}>Regras</span><br/><br/>
                                    <span style={{fontSize:"15px", fontFamily: "cinzel-bold"}}>Todos são bem vindos ao Discord da VALHALLA_TM <br/>desde que se encaixem no perfil e regras a seguir.</span><br/><br/>
                                    
                                    
                                    <span style={{fontSize:"15px", fontFamily: "cinzel-bold"}}>• Sem Spoiler</span>​<br/>
                                    <span style={{fontSize:"15px", fontFamily: "cinzel"}}>Se você não se importa, respeite quem se importa.</span><br/>
                                    <span style={{fontSize:"15px", fontFamily: "cinzel-bold"}}>• Mantenha o som regulado</span><br/>
                                    <span style={{fontSize:"15px", fontFamily: "cinzel"}}>O volume do seu som pode dar retorno e atrapalhar outras pessoas.</span><br/>
                                    <span style={{fontSize:"15px", fontFamily: "cinzel-bold"}}>• Respeito aos integrantes</span><br/>
                                    <span style={{fontSize:"15px", fontFamily: "cinzel"}}>brincadeira é brincadeira! faça com quem lhe de tal liberdade. exageros, xingamentos e brigas não serão aceitos.</span><br/>
                                    <span style={{fontSize:"15px", fontFamily: "cinzel-bold"}}>• Evite Problemas</span><br/>
                                    <span style={{fontSize:"15px", fontFamily: "cinzel"}}>Se não gostou de algo ou tem problema com algum integrante, tente resolver amigavelmente. caso não de certo, silencie a pessoa para que não haja interação entre vocês, assim evitamos atritos e climas desconfortáveis.</span><br/>
                                    <span style={{fontSize:"15px", fontFamily: "cinzel-bold"}}>•Saiba a hora de pedir ajuda a um moderador</span><br/>
                                    <span style={{fontSize:"15px", fontFamily: "cinzel"}}>Caso ocorra algum problema que não consiga resolver. repasse o acontecido para um Moderador/Administrador para que sejam tomadas as devidas atitudes.</span><br/>
                                    ​
                                    <span style={{fontSize:"15px", fontFamily: "cinzel-bold"}}>É ESTRITAMENTE PRO​IBIDO ATITUDES OU APOLOGIAS RACISTAS, HOMOFÓBICAS, PRECONCEITUOSAS, DE PEDOFILIA, VIOLÊNCIA DE QUALQUER TIPO E GORE.</span>
                                </div>
                            </div>
                            <div className="col-6" style={{textAlign: "center"}}>
                                <div style={{marginTop: "10px", textAlign: "right", color: "white"}}>
                                    <Link to="/">
                                        <svg style={{fill: "white"}} preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">
                                            <g>
                                                <path d="M161.214 85.356a4.554 4.554 0 0 0-.419-1.144c-9.663-23.389-32.434-39.981-59.109-40.662V29.612a4.612 4.612 0 0 0-6.921-3.995L62.782 44.084a4.612 4.612 0 0 0 0 7.99L94.765 70.54a4.628 4.628 0 0 0 2.307.619 4.618 4.618 0 0 0 4.614-4.614V52.777c20.457.607 38.209 12.089 47.637 28.894H84.144c-12.258 0-22.23 9.972-22.23 22.23s9.972 22.23 22.23 22.23h36.209c3.391 0 6.151 2.76 6.151 6.151s-2.76 6.151-6.151 6.151H98.516c-12.524 0-23.087 8.466-26.329 19.968-17.127-9.727-28.728-28.104-28.728-49.169 0-2.547-2.067-4.614-4.614-4.614s-4.614 2.067-4.614 4.614C34.231 139.935 57.533 175 100 175c36.263 0 65.768-29.505 65.768-65.768 0-8.428-1.652-16.463-4.554-23.876zM92.458 58.552L74.316 48.078l18.142-10.474v20.948zM100 165.773c-6.781 0-13.257-1.261-19.286-3.46 1.634-8.34 8.991-14.652 17.803-14.652h21.836c8.479 0 15.379-6.899 15.379-15.379 0-8.479-6.899-15.379-15.379-15.379H84.144c-7.17 0-13.003-5.833-13.003-13.003s5.833-13.003 13.003-13.003h69.286c1.982 5.759 3.11 11.911 3.11 18.334 0 31.179-25.362 56.542-56.54 56.542z" fill="#22495A" data-color="1"></path>
                                            </g>
                                        </svg><br/>
                                    </Link>
                                    <span style={{fontSize:"12px", fontFamily: "cinzel", letterSpacing: "0.12em", marginRight: "5px"}}>Voltar</span>
                                </div>
                                <div style={{marginTop: "-90px"}}>
                                    <img src={process.env.PUBLIC_URL+"/images/habilidades1.png"} style={{marginTop: "15px"}}></img>
                                    <img src={process.env.PUBLIC_URL+"/images/habilidades2.png"} style={{marginTop: "30px"}}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default Regras;